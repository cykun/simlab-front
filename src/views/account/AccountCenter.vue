<template>
  <div class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-4 px-1">
          <div class="ant-card">
            <div class="ant-card-body">
              <div class="avatarHolder">
                <img v-bind:src="userInfo.avatar" alt="Img" />
                <h6>{{ userInfo.username }}</h6>
                <div>{{ userInfo.resume }}</div>
              </div>
              <hr />
              <div>
                <h6>个人资料</h6>
                <p>{{ userInfo.address }}</p>
                <p>{{ userInfo.sex }}</p>
                <p>{{ userInfo.school }}</p>
                <p>{{ userInfo.major }}</p>
              </div>
              <hr />
              <div>
                <h6>标签</h6>
                <span class="tag">很有想法</span>
                <span class="tag">很有想法</span>
                <span class="tag">很有想法</span>
                <span class="tag">很有想法</span>
                <span class="tag">很有想法</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8 px-1">
          <div class="ant-card">
            <div class="ant-card-head" style="border: none;">
              <div class="tabs-bar">
                <div class="tabs-nav-wrap">
                  <div class="tabs-nav-scroll">
                    <div class="tabs-nav">
                      <div>
                        <div
                          class="tabs-tab"
                          v-bind:class="{ 'tabs-tab-active': tabIndex == 0 }"
                          @click="tabIndex = 0"
                        >
                          历史
                        </div>
                        <div
                          class="tabs-tab"
                          v-bind:class="{ 'tabs-tab-active': tabIndex == 1 }"
                          @click="tabIndex = 1"
                        >
                          我的收藏
                        </div>
                        <div
                          class="tabs-tab"
                          v-bind:class="{ 'tabs-tab-active': tabIndex == 2 }"
                          @click="tabIndex = 2"
                        >
                          我的实验
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ant-card-body">
              <div class="row" v-show="tabIndex == 0">
                <div class="col-md-4" v-for="item of history" :key="item.id">
                  <Card
                    :hoverable="true"
                    :cover="item.img"
                    :title="item.title"
                  />
                </div>
              </div>
              <div class="row" v-show="tabIndex == 1">
                <div class="col-md-4" v-for="item of collect" :key="item.id">
                  <Card
                    :hoverable="true"
                    :cover="item.img"
                    :title="item.title"
                  />
                </div>
              </div>
              <div class="row" v-show="tabIndex == 2">
                <div class="col-md-4" v-for="item of mine" :key="item.id">
                  <Card :hoverable="true" :cover="item.img" :title="item.title">
                    >
                    <ul slot="actions" class="ant-card-actions">
                      <li style="width: 50%;" @click="handleEdit">
                        <span>
                          <span class="anticon">
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              class=""
                              data-icon="edit"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </li>
                      <li style="width: 50%;" @click="handleShare">
                        <span>
                          <span class="anticon">
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              class=""
                              data-icon="share-alt"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { getUserDetail } from "@/api/user";

export default {
  name: "List",
  components: {
    Card
  },
  data: function() {
    return {
      tabIndex: 0,
      userInfo: {
        username: "",
        avatar: "",
        resume: "",
        address: "",
        sex: "",
        school: "",
        major: ""
      },
      history: [
        {
          id: 0,
          title: "XXXX虚拟仿真",
          img: require("@/assets/img/experiment/exp2.jpg"),
          url: "/detail"
        },
        {
          id: 1,
          title: "XXXX虚拟仿真",
          img: require("@/assets/img/experiment/exp2.jpg"),
          url: "/detail.html"
        },
        {
          id: 2,
          title: "XXXX虚拟仿真",
          img: require("@/assets/img/experiment/exp2.jpg"),
          url: "/detail"
        },
        {
          id: 3,
          title: "XXXX虚拟仿真",
          img: require("@/assets/img/experiment/exp2.jpg"),
          url: "/detail.html"
        }
      ],
      collect: [
        {
          id: 0,
          title: "XXXX虚拟仿真",
          img: require("@/assets/img/experiment/exp2.jpg"),
          url: "/detail"
        },
        {
          id: 1,
          title: "XXXX虚拟仿真",
          img: require("@/assets/img/experiment/exp2.jpg"),
          url: "/detail"
        }
      ],
      mine: [
        {
          id: 0,
          title: "XXXX虚拟仿真",
          img: require("@/assets/img/experiment/exp2.jpg"),
          url: "/detail"
        }
      ]
    };
  },
  mounted: function() {
    getUserDetail().then(response => {
      const data = response.data;
      this.userInfo = data;
    });
  },
  methods: {
    handleEdit() {
      this.$router.push("/experiment/edit");
    },
    handleShare() {
      this.$message("你点击了分享");
    }
  }
};
</script>
