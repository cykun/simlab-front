<template>
  <div class="page-con">
    <div>
      <router-link :to="{ path: '/' }" class="logo-text">
        <span>Simlab</span>
        <img src="@/assets/img/logo.svg" alt="logo"
      /></router-link>
    </div>
    <div style="margin-top:12px">
      <el-form ref="form" :rules="rules" :model="form">
        <el-form-item prop="mobile">
          <input
            type="text"
            class="txt"
            v-model="form.mobile"
            placeholder="请输入手机号"
          />
        </el-form-item>
        <el-form-item prop="password">
          <input
            type="password"
            class="txt"
            v-model="form.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <div style="position:relative;">
          <el-form-item prop="code">
            <input
              type="text"
              class="txt"
              v-model="form.code"
              placeholder="请输入验证码"
            />
          </el-form-item>
          <button type="button" class="btn btn-verify" @click="getCode">
            <span v-show="sendAuthCode">获取验证码</span>
            <span v-show="!sendAuthCode">{{ time }}秒之后重新发送验证码</span>
          </button>
        </div>
        <el-form-item prop="username">
          <input
            type="text"
            class="txt"
            v-model="form.username"
            placeholder="请输入不超过15位字符的用户名"
          />
        </el-form-item>
        <div style="margin-top: 8px;">
          <input
            type="button"
            value="立即注册"
            class="btn btn-primary btn-block btn-round"
            @click="handleSubmit"
          />
        </div>
      </el-form>
    </div>
    <div class="signup to-log">
      已有账号，
      <router-link :to="{ path: '/login' }">去登录</router-link>
    </div>
    <div style="margin:36px 0px 0px 0px">
      <div class="sep">
        <div style="margin-top:-9px;">
          <label>第三方账号注册</label>
        </div>
      </div>
      <div style="position: relative;margin-top:16px;">
        <span>1</span>
        <span>2</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, FormItem } from "element-ui";
import { register, getVerificationCode } from "@/api/user";

export default {
  components: {
    ElForm: Form,
    ElFormItem: FormItem
  },
  data() {
    let validateMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!/^1[345678]\d{9}$/.test(value)) {
        callback(new Error("请输入正确手机号"));
      } else {
        callback();
      }
    };

    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    let validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (!/^\d{6}$/.test(value)) {
        callback(new Error("请输入正确验证码"));
      } else {
        callback();
      }
    };

    let validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      form: {
        mobile: "",
        password: "",
        code: "",
        username: ""
      },
      rules: {
        mobile: [{ validator: validateMobile, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      },
      time: 0,
      sendAuthCode: true
    };
  },
  methods: {
    handleSubmit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          register({
            mobile: this.form.mobile,
            password: this.form.password,
            code: this.form.code,
            username: this.form.username
          })
            .then(response => {
              if (response.data.code === 200) {
                this.$message("注册成功");
                this.$router.push({ path: "/login" });
              } else this.$message("注册失败1");
            })
            .catch(error => {
              window.alert(error);
            });
        } else {
          return false;
        }
      });
    },
    registerSuccess(res) {
      this.$router.push({ path: "/" });
    },
    requestFailed(err) {
      window.console.log(err);
    },
    getCode() {
      if (this.sendAuthCode) {
        this.time = 60;
        this.sendAuthCode = false;
        let verificationCodeTimer = setInterval(() => {
          this.time--;
          if (this.time <= 0) {
            this.sendAuthCode = true;
            clearInterval(verificationCodeTimer);
          }
        }, 1000);
        getVerificationCode(this.form.mobile);
      }
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
  margin-top: -242px;
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

.btn-verify {
  position: absolute;
  padding: 4px 5px;
  color: #4386f5;
  top: 7px;
  right: 18px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
}

.page-con .signup {
  margin-top: 12px;
  color: #7f7f7f;
  text-align: left;
  font-size: 13px;
}

.page-con .to-log {
  text-align: right;
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
</style>
