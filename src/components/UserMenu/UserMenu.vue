<template>
  <el-popover placement="bottom-end" width="160" trigger="click">
    <div>
      <router-link :to="{ path: '/account/center' }" class="dropdown-item "
        >个人主页</router-link
      >
      <router-link :to="{ path: '/account/setting' }" class="dropdown-item "
        >个人设置</router-link
      >
      <div class="dropdown-divider "></div>
      <a href="javascript:void(0) " class="dropdown-item " @click="handleLogout"
        >登出</a
      >
    </div>
    <a slot="reference">
      <span style="vertical-align: middle; margin-right: 6px">{{
        username
      }}</span>
      <img v-bind:src="avatar" alt=" " style="width: 32px; height: 32px" />
    </a>
  </el-popover>
</template>

<script>
import { Popover } from "element-ui";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserMenu",
  components: {
    ElPopover: Popover
  },
  computed: {
    ...mapGetters(["username", "avatar"])
  },
  methods: {
    ...mapActions(["Logout"]),
    handleLogout() {
      this.Logout();
    }
  }
};
</script>
