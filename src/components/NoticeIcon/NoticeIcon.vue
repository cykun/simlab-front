<template>
  <el-popover placement="bottom-end" width="300" trigger="click">
    <div>
      <a class="dropdown-item d-flex">
        <div class="dropdown-list-image mr-3 ">
          <img src="@/assets/img/boy.svg" alt=" " />
        </div>
        <div>
          <div>这是一条消息000000000000000</div>
          <div class="small ">15:33</div>
        </div>
      </a>
    </div>
    <a slot="reference" class="nav-link ">
      <el-badge :value="12" class="item">
        <i class="ri-message-3-line ri-lg"></i>
      </el-badge>
    </a>
  </el-popover>
</template>

<script>
import { Popover, Badge } from "element-ui";

export default {
  name: "NoticeIcon",
  components: {
    ElPopover: Popover,
    ElBadge: Badge
  }
};
</script>

<style scoped>
.item {
  margin-right: 40px;
}
</style>
