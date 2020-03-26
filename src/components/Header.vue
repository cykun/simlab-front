<template>
  <header class="sticky-top bg-light header">
    <div class="container">
      <div class="row">
        <router-link
          :to="{ path: '/' }"
          class="navbar-brand"
          href="#"
          style="font-size: 1.25rem;"
          ><img src="../assets/img/logo.svg" alt="Logo" />
          Cykun仿真实验平台</router-link
        >
        <div class="d-flex align-items-center" style="flex-grow: 1;">
          <Category />
          <headerSearch />
        </div>
        <div class="d-flex align-items-center">
          <nav>
            <ul class="classynav ">
              <li>
                <router-link :to="{ path: '/developer/center' }"
                  >开发者中心</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/contact' }">联系</router-link>
              </li>
              <li>
                <router-link :to="{ path: '/team' }">团队</router-link>
              </li>
              <li>
                <router-link :to="{ path: '/about' }">关于</router-link>
              </li>
            </ul>
          </nav>
          <notice-icon />
          <div class="topbar-divider d-none d-sm-block"></div>
          <!-- 未登录 -->
          <div v-if="!isLogined">
            <router-link :to="{ path: '/login' }" class="btn">登录</router-link>
            <a class="btn btn-gradient btn-round btn-shadow " href="# ">注册</a>
          </div>
          <!-- 已登录 -->
          <user-menu v-if="isLogined" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderSearch from "@/components/HeaderSearch.vue";
import NoticeIcon from "@/components/NoticeIcon";
import Category from "@/components/Category";
import UserMenu from "@/components/UserMenu";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    HeaderSearch,
    NoticeIcon,
    Category,
    UserMenu
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["username"]),
    isLogined: function() {
      return this.username !== "";
    }
  }
};
</script>

<style scoped>
.header {
  -webkit-box-shadow: 0px 0px 25px 0px rgba(45, 69, 95, 0.1);
  -moz-box-shadow: 0px 0px 25px 0px rgba(45, 69, 95, 0.1);
  box-shadow: 0px 0px 25px 0px rgba(45, 69, 95, 0.1);
  transition: all 0.45s ease 0s;
}
</style>
