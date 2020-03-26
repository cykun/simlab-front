<template>
  <div class="my-4">
    <div class="container">
      <div class="row no-gutters bg-light">
        <div class="col-lg-2" style="border-right: 1px solid #e8e8e8;">
          <div class="py-3">
            <ul class="menu">
              <li
                class="menu-item"
                v-for="(item, index) in settingTagList"
                v-bind:class="{ 'menu-item-selected': tabIndex == index }"
                v-bind:key="index"
                @click="tabIndex = index"
              >
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="p-3">
            <p>{{ settingTagList[tabIndex] }}</p>
            <hr />
            <BasicSetting v-if="tabIndex == 0" />
            <SecuritySetting v-if="tabIndex == 1" />
            <AccountBind v-if="tabIndex == 2" />
            <MessageNotification v-if="tabIndex == 3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicSetting from "@/components/setting/BasicSetting.vue";
import SecuritySetting from "@/components/setting/SecuritySetting.vue";
import AccountBind from "@/components/setting/AccountBind.vue";
import MessageNotification from "@/components/setting/MessageNotification.vue";

export default {
  name: "AccountSetting",
  components: {
    BasicSetting,
    SecuritySetting,
    AccountBind,
    MessageNotification
  },
  data: function() {
    return {
      tabIndex: 0,
      settingTagList: ["基础设置", "安全设置", "账号绑定", "新消息通知"]
    };
  },
  mounted: function() {},
  methods: {}
};
</script>
