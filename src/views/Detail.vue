<template>
  <div class="my-4">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <el-card shadow="never">
            <video
              v-bind:src="experimentInfo.videoUrl"
              style="vertical-align: middle; width: 100%; height: auto;"
              controls
            ></video>
          </el-card>
          <el-card class="mt-3" shadow="never">
            <el-tabs v-model="activeName">
              <el-tab-pane
                label="简要"
                name="first"
                v-html="experimentInfo.concise"
                >></el-tab-pane
              >
              <el-tab-pane
                label="项目描述"
                name="second"
                v-html="experimentInfo.description"
              ></el-tab-pane>
              <el-tab-pane
                label="操作说明"
                name="third"
                v-html="experimentInfo.operation"
              ></el-tab-pane>
              <el-tab-pane label="实验记录" name="forth"></el-tab-pane>
            </el-tabs>
          </el-card>
          <el-card class="mt-3" shadow="never">
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
                          @click="handleAddComment"
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
          <div class="mb-3">
            <el-button type="primary" class="btn-block" @click="startExperiment"
              >开始实验</el-button
            >
          </div>
          <div class="mb-3">
            <el-button type="info" class="btn-block" @click="handleCollect">
              <span v-if="collected">取消收藏</span
              ><span v-if="!collected">收藏</span></el-button
            >
          </div>
          <el-card shadow="never">
            <h6>实验信息</h6>
            <hr />
            <div>实验名：{{ experimentInfo.name }}</div>
            <div>所属专业：{{ experimentInfo.type }}</div>
            <div>评价：5</div>
            <div>实验人数：0</div>
          </el-card>
          <div class="mt-4">
            <el-card shadow="never">
              <h6>最近实验</h6>
              <hr />
              <div class="row">
                <div class="col-md-4">
                  <a>收藏<i class="ri-heart-line"></i></a>
                </div>
                <div class="col-md-4">
                  <a>分享<i class="ri-share-line"></i></a>
                </div>
                <div class="col-md-4">
                  <a>点赞<i class="ri-error-warning-line"></i></a>
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
import { Input, Button, Card, Tabs, TabPane } from "element-ui";
import {
  getCommentList,
  addComment,
  getExperimentDetail
} from "@/api/experiment";
import { getNowTime } from "@/utils/date";
import { checkExperimentCollect, collectExperiment } from "@/api/experiment";

export default {
  name: "Detail",
  components: {
    ElCard: Card,
    ElInput: Input,
    ElButton: Button,
    ElTabs: Tabs,
    ElTabPane: TabPane,
    Comment
  },
  data: function() {
    return {
      activeName: "second",
      experimentInfo: {
        id: 0,
        name: "",
        type: "",
        videoUrl: "",
        concise: "",
        description: "",
        operation: ""
      },
      myComment: "",
      comments: [],
      collected: false
    };
  },
  computed: {
    ...mapGetters(["username", "avatar"])
  },
  mounted: function() {
    checkExperimentCollect(this.$route.params.id).then(response => {
      this.collected = response.data.data.collected;
    });
    getExperimentDetail(this.$route.params.id).then(response => {
      this.experimentInfo = response.data.data;
    });
    getCommentList(this.$route.params.id).then(response => {
      this.comments = response.data.data.list;
    });
  },
  methods: {
    startExperiment() {
      this.$router.push("/experiment/start");
    },
    handleAddComment() {
      if (this.username === "" || this.myComment === "") return;
      addComment({
        expId: this.experimentInfo.id,
        content: this.myComment
      })
        .then(response => {
          let myCommentId = response.data.data;
          if (myCommentId) {
            this.comments.unshift({
              id: myCommentId,
              avatar: this.avatar,
              username: this.username,
              content: this.myComment,
              createTime: getNowTime(),
              like: 0,
              dislike: 0
            });
          }
        })
        .catch(error => {
          window.alert(error);
        });
    },
    handleCollect() {
      if (!this.collected) {
        collectExperiment(this.$route.params.id).then(response => {
          if (response.data.code === 200) {
            this.collected = true;
          }
        });
      }
    }
  }
};
</script>
