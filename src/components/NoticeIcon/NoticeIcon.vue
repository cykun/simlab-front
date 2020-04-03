<template>
  <el-popover placement="bottom-end" width="220" trigger="click">
    <div>
      <a v-for="item in messages" :key="item.id" class="dropdown-item d-flex">
        <div class="dropdown-list-image mr-3 ">
          <img src="@/assets/img/boy.svg" alt=" " />
        </div>
        <div>
          <div>{{ item.content }}</div>
          <div class="small ">{{ item.publishTime }}</div>
        </div>
      </a>
    </div>
    <a slot="reference" class="nav-link " @click="clicked = true">
      <el-badge :value="messages.length" class="item" :hidden="hideBadge">
        <i class="ri-message-3-line ri-lg"></i>
      </el-badge>
    </a>
  </el-popover>
</template>

<script>
import { Popover, Badge } from "element-ui";
import { getMessageNav } from "@/api/login";

export default {
  name: "NoticeIcon",
  components: {
    ElPopover: Popover,
    ElBadge: Badge
  },
  data: function() {
    return {
      messages: [],
      clicked: false
    };
  },
  computed: {
    hideBadge: function() {
      return this.clicked ? true : false;
    }
  },
  mounted: function() {
    this.getMessages();
  },
  methods: {
    getMessages: function() {
      getMessageNav().then(response => {
        this.messages = response.data;
      });
    }
  }
};
</script>

<style scoped>
.item {
  margin-right: 40px;
}
</style>
