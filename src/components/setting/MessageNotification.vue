<template>
  <div>
    <ul class="list-items">
      <li class="list-item">
        <div class="list-item-meta">
          <div class="list-item-meta-content">
            <h6>账号密码</h6>
            <div class="list-item-meta-description">
              其他用户的消息将以站内信的形式通知
            </div>
          </div>
        </div>
        <ul class="list-item-action">
          <li>
            <el-switch v-model="value1"></el-switch>
          </li>
        </ul>
      </li>
      <li class="list-item">
        <div class="list-item-meta">
          <div class="list-item-meta-content">
            <h6>系统消息</h6>
            <div class="list-item-meta-description">
              系统消息将以站内信的形式通知
            </div>
          </div>
        </div>
        <ul class="list-item-action">
          <li>
            <el-switch v-model="value2"> </el-switch>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
// import { Switch } from "ant-design-vue";
import { Switch } from "element-ui";

export default {
  name: "MessageNotification",
  components: {
    // ASwitch: Switch
    ElSwitch: Switch
  },
  data: function() {
    return {
      value1: true,
      value2: true
    };
  },
  mounted: function() {},
  methods: {}
};
</script>
