<template>
  <div class="my-4">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <el-card>
            <video
              v-bind:src="experimentInfo.video"
              style="vertical-align: middle; width: 100%; height: auto;"
              controls
            ></video>
            <div class="my-3">
              <h5>简要</h5>
              <div class="mb-4" v-html="experimentInfo.summary"></div>
              <h5>详细介绍</h5>
              <div class="mb-4" v-html="experimentInfo.introduce"></div>
              <h5>操作说明</h5>
              <div v-html="experimentInfo.operation"></div>
            </div>
          </el-card>
          <el-card class="mt-3">
            <div class="comment">
              <div class="comment-inner">
                <div class="comment-avatar">
                  <span class="ant-avatar avatar-image">
                    <img src="../assets/img/boy.svg" alt="" />
                  </span>
                </div>
                <div class="comment-content">
                  <div class="comment-content-detail">
                    <el-input
                      type="textarea"
                      placeholder="请输入内容"
                      v-model="myComment"
                      maxlength="128"
                      show-word-limit
                    >
                    </el-input>
                    <div
                      class="d-flex align-items-center justify-content-between my-2"
                    >
                      <div class="d-flex">
                        <a href=""><i class="ri-user-smile-line mr-2"></i></a>
                        <a href=""><i class="ri-camera-line mr-2"></i></a>
                      </div>
                      <div>
                        <el-button
                          type="primary"
                          round
                          size="small"
                          @click="addComment"
                          >发表</el-button
                        >
                        <el-button type="info" round size="small"
                          >取消</el-button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ant-list ant-list-split">
                <div class="ant-list-header">
                  全部评论<span style="margin-left: 6px;">{{
                    comments.length
                  }}</span>
                </div>
                <div class="ant-spin-nested-loading">
                  <div class="ant-spin-container">
                    <div
                      class="ant-list-item"
                      v-for="(item, index) in comments"
                      v-bind:key="index"
                    >
                      <div
                        class="ant-list-item-content ant-list-item-content-single"
                      >
                        <Comment
                          v-bind:avatar="item.avatar"
                          v-bind:author="item.username"
                          v-bind:datetime="item.createTime"
                          v-bind:content="item.content"
                          v-bind:likes="0"
                          v-bind:dislikes="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
        <div class="col-md-3">
          <el-card>
            <h6>实验信息</h6>
            <hr />
            <div class="row" style="text-align: center;">
              <div class="col-md-4">
                <div>实验过</div>
                <div>15</div>
              </div>
              <div class="col-md-4">
                <div>收藏</div>
                <div>15</div>
              </div>
              <div class="col-md-4">
                <div>评分</div>
                <div>5</div>
              </div>
            </div>
            <div class="mt-3">
              <el-button
                type="primary"
                class="btn-block"
                @click="startExperiment"
                >开始实验<i class="ri-arrow-right-fill"></i
              ></el-button>
            </div>
          </el-card>
          <div class="mt-4">
            <el-card>
              <div class="row">
                <div class="col-md-4">
                  <a>收藏<i class="ri-heart-line"></i></a>
                </div>
                <div class="col-md-4">
                  <a>分享<i class="ri-share-line"></i></a>
                </div>
                <div class="col-md-4">
                  <a>报错<i class="ri-error-warning-line"></i></a>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Comment from "@/components/Comment";
import { Input, Button, Card } from "element-ui";
import { getCommentList } from "@/api/experiment";

export default {
  name: "Detail",
  components: {
    ElCard: Card,
    ElInput: Input,
    ElButton: Button,
    Comment
  },
  data: function() {
    return {
      experimentInfo: {
        id: 1,
        name: "XXXX仿真实验",
        major: "化学",
        summary:
          "虚拟仿真（Virtual Reality）：仿真（simulation）技术， 或称为模拟技术，就是用一个系统模仿另一个真实系统的技术。 虚拟仿真实际上是一种可创建和体验虚拟世界（Virtual World）的计算机系统。 此种虚拟世界由计算机生成，可以是现实世界的再现，亦可以是构想中的世界， 用户可借助视觉、听觉及触觉等多种传感通道与虚拟世界进行自然的交互。",
        video: require("../assets/video/音阙诗听 - 芒种.mp4"),
        introduce:
          "<li>掌握制备酰胺的原理和方法。</li><li>掌握从固体粗产物中除去水溶性杂质的方法，并用重结晶进一步纯化</li><li>基于Unity3D的乙酰苯胺制备实验虚拟仿真环境。在Unity3D上构建仿真平台，解决真实实验危险性大、成本高、环境污染、教学效率低下等问题。</li>",
        operation:
          "1,打开《虚拟仿真乙酰苯胺制备实验》应用程序，点击进入实验按钮，学习实验原理、操作、使用方法、注意事项后，点击确认进入实验；<br>2,初始界面为一个操作台，学生在操作台上独立选择合适的试剂种类、实验仪器等本实验所需要的实验设备和材料，其中存在干扰试剂、仪器；<br>3，戴手套，防止过热被烫伤，否则会出现强烈的红色视觉警告，并扣除分数；<br>4，准备好器材和材料后，在圆底烧瓶（500ml）里加入5ml苯胺、7.5ml冰醋酸、0.1g锌粉，学生需要自行思考选择正确毫升数5，加入少许沸石，用球形分馏柱搭好分馏装置，调整至与所选圆底烧瓶规格对应的分馏装置高度，若未加沸石，会产生暴沸的严重后果6，点击进水按钮，点击加热按钮，使反应物微沸腾15min（在仿真实验中等待时间缩短为25秒），后逐渐升高温度，维持100-110℃，进行反应7，若出现液体蒸发掉现象，表示反应已经完成，玻璃棒搅拌下趁热将反应物倒入装有100ml冰水的烧杯中，冷却后抽滤析出固体，并用冷水洗涤",
        feature: "这是实验特色"
      },
      myComment: "",
      comments: []
    };
  },
  computed: {
    ...mapGetters(["username", "avatar"])
  },
  mounted: function() {
    getCommentList(this.experimentInfo.id).then(response => {
      this.comments = response.data.data.list;
    });
  },
  methods: {
    onCollectBtnClick() {
      this.isCollected = !this.isCollected;
    },
    onLikeBtnClick() {
      this.isLike = !this.isLike;
    },
    startExperiment() {
      this.$router.push("/experiment/start");
    },
    addComment() {
      if (this.username === "") return;
      this.comments.unshift({
        id: 8,
        avatar: this.avatar,
        username: this.username,
        url: "#",
        content: this.contentInput,
        time: "10:51",
        like: 0,
        dislike: 0
      });
    }
  }
};
</script>
