<template>
  <div class="page-con">
    <div>
      <router-link :to="{ path: '/' }" class="logo-text">
        <span>Simlab</span>
        <img src="@/assets/img/logo.svg" alt="logo"
      /></router-link>
    </div>
    <div style="margin-top:12px">
      <el-form ref="passwordForm" :rules="rules" :model="passwordForm">
        <el-form-item prop="username">
          <input
            type="text"
            class="txt"
            v-model="passwordForm.username"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <input
            type="password"
            class="txt"
            v-model="passwordForm.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <div style="margin-top: 8px;">
          <input
            type="button"
            value="立即登录"
            class="btn btn-primary btn-block btn-round"
            @click="handleSubmit"
          />
        </div>
      </el-form>
    </div>
    <div class="signup">
      <a href="">忘记密码</a>
      <span class="sing-btn">
        没有账号，
        <router-link :to="{ path: '/register' }">去注册</router-link>
      </span>
    </div>
    <div style="margin:36px 0px 0px 0px">
      <div class="sep">
        <div style="margin-top:-9px;">
          <label>第三方登录</label>
        </div>
      </div>
      <div>
        <button class="btn btn-primary btn-block btn-weixin">
          微信登录
        </button>
      </div>
      <div style="position: relative;margin-top:16px;">
        <span>qq</span>
        <span>github</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Form, FormItem } from "element-ui";

export default {
  components: {
    ElForm: Form,
    ElFormItem: FormItem
  },
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      passwordForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["Login", "Logout"]),
    handleSubmit() {
      this.$refs["passwordForm"].validate(valid => {
        if (valid) {
          const { Login } = this;
          Login({
            username: this.passwordForm.username,
            password: this.passwordForm.password
          })
            .then(res => this.loginSuccess(res))
            .catch(err => this.requestFailed(err))
            .finally(() => {
              //this.$router.push({ path: "/" });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    loginSuccess(res) {
      this.$router.push({ path: "/" });
    },
    requestFailed(err) {
      window.console.log(err);
    }
  }
};
</script>

<style scoped>
.page-con {
  text-align: center;
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -221px;
  margin-left: -180px;
}

.logo-text {
  display: inline-block;
  margin-left: 8px;
  font-size: 34px;
  vertical-align: 7px;
  font-family: arial;
  height: 60px;
  text-shadow: 1px 1px 2px #bbb inset;
}

.logo-text > * {
  vertical-align: middle;
}

.logo-text > img {
  width: 58px;
  height: auto;
}

.txt {
  width: 100%;
  padding: 4px 20px;
  border-radius: 50px;
  border: solid 1px #ccc;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 42px;
  outline: 0;
  font-size: 14px;
}

.page-con .signup {
  margin-top: 12px;
  color: #7f7f7f;
  text-align: left;
  font-size: 13px;
}

.page-con .signup .sing-btn {
  float: right;
}

.page-con .sep {
  border-top: 1px solid #ddd;
  height: 20px;
  text-align: center;
}

.page-con label {
  color: #666;
  display: inline-block;
  padding: 0 10px;
  background: #fff;
  font-size: 13px;
}

.btn-weixin {
  background: #fff;
  color: #36bf21;
  width: 100%;
  border: 1px solid #36bf21;
  border-radius: 50px;
}
</style>
