<template>
  <div>
    <ul class="list-items">
      <li class="list-item">
        <div class="list-item-meta">
          <div class="list-item-meta-content">
            <h6>账号密码</h6>
            <div class="list-item-meta-description">
              当前密码强度：<strong>{{
                securitySettingsInfo.passwordStrength
              }}</strong>
            </div>
          </div>
        </div>
        <ul class="list-item-action">
          <li><a>修改</a></li>
        </ul>
      </li>
      <li class="list-item">
        <div class="list-item-meta">
          <div class="list-item-meta-content">
            <h6>密保手机</h6>
            <div class="list-item-meta-description">
              已绑定手机：<strong>{{ securitySettingsInfo.mobile }}</strong>
            </div>
          </div>
        </div>
        <ul class="list-item-action">
          <li><a>修改</a></li>
        </ul>
      </li>
      <li class="list-item">
        <div class="list-item-meta">
          <div class="list-item-meta-content">
            <h6>密保问题</h6>
            <div class="list-item-meta-description">
              未设置密保问题，密保问题可有效保护账户安全
            </div>
          </div>
        </div>
        <ul class="list-item-action">
          <li><a>设置</a></li>
        </ul>
      </li>
      <li class="list-item">
        <div class="list-item-meta">
          <div class="list-item-meta-content">
            <h6>备用邮箱</h6>
            <div class="list-item-meta-description">
              已绑定邮箱：<strong>{{ securitySettingsInfo.email }}</strong>
            </div>
          </div>
        </div>
        <ul class="list-item-action">
          <li><a>绑定</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SecuritySetting",
  data: function() {
    return {
      securitySettingsInfo: {
        passwordStrength: "强",
        mobile: "13695932659",
        email: "24444@qq.com"
      }
    };
  }
};
</script>
