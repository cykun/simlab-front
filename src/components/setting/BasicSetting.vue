<template>
  <div class="row">
    <div class="col-lg-4 d-flex flex-column align-items-center">
      <div class="form-group">
        <input
          type="file"
          class="file-upload-default"
          ref="fileInput"
          accept="image/*"
          @change="getFile"
        />
        <img
          style="width: 120px; height: auto; border-radius: 50%; cursor: pointer;"
          v-bind:src="userInfo.avatar"
          alt="avatar"
          @click="onPickFile"
        />
      </div>
      <input class="btn btn-primary btn-xs" type="button" value="上传头像" />
    </div>
    <div class="col-lg-8">
      <div class="form-item">
        <span style="margin-right: 4em;">用户名</span>
        <div>
          <span>{{ userInfo.username }}</span>
          <button type="button" class="btn-edit-xs" @click="onEdit($event)">
            <svg
              t="1582683257274"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2112"
              width="16"
              height="16"
            >
              <path
                d="M308.2 801.133l-74.1-74.1-33.1 91.2v40h505v-40h-445.1z"
                p-id="2113"
              ></path>
              <path
                d="M792.4 151.133l-55.4 5-458.7 458.7-20.7 71.1 91 91 71.1-20.7 458.7-458.7 5-55.4-91-91zM495.9 620.433l-28.3-28.3 245.4-245.4 28.3 28.3-245.4 245.4z"
                p-id="2114"
              ></path>
            </svg>
            编辑
          </button>
        </div>
        <div style="display: none;">
          <div class="mb-2" data-type="input">
            <input
              type="text"
              name="username"
              id="username"
              v-bind:value="userInfo.username"
            />
          </div>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="onCancel($event)"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="onSave($event)"
          >
            保存
          </button>
        </div>
      </div>
      <div class="form-item">
        <span style="margin-right: 5em;">性别</span>
        <div>
          <span>{{ userInfo.sex }}</span>
          <button type="button" class="btn-edit-xs" @click="onEdit($event)">
            <svg
              t="1582683257274"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2112"
              width="16"
              height="16"
            >
              <path
                d="M308.2 801.133l-74.1-74.1-33.1 91.2v40h505v-40h-445.1z"
                p-id="2113"
              ></path>
              <path
                d="M792.4 151.133l-55.4 5-458.7 458.7-20.7 71.1 91 91 71.1-20.7 458.7-458.7 5-55.4-91-91zM495.9 620.433l-28.3-28.3 245.4-245.4 28.3 28.3-245.4 245.4z"
                p-id="2114"
              ></path>
            </svg>
            编辑
          </button>
        </div>
        <div style="display: none;">
          <div class="mb-2" data-type="radio">
            <input
              type="radio"
              name="sex"
              id="sex"
              v-model="userInfo.sex"
              value="男"
            />男
            <input
              type="radio"
              name="sex"
              id=""
              v-model="userInfo.sex"
              value="女"
            />女
            <input
              type="radio"
              name="sex"
              id=""
              v-model="userInfo.sex"
              checked
              value="保密"
            />保密
          </div>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="onCancel($event)"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="onSave($event)"
          >
            保存
          </button>
        </div>
      </div>
      <div class="form-item">
        <span style="margin-right: 5em;">学校</span>
        <div>
          <span>{{ userInfo.school }}</span>
          <button type="button" class="btn-edit-xs" @click="onEdit($event)">
            <svg
              t="1582683257274"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2112"
              width="16"
              height="16"
            >
              <path
                d="M308.2 801.133l-74.1-74.1-33.1 91.2v40h505v-40h-445.1z"
                p-id="2113"
              ></path>
              <path
                d="M792.4 151.133l-55.4 5-458.7 458.7-20.7 71.1 91 91 71.1-20.7 458.7-458.7 5-55.4-91-91zM495.9 620.433l-28.3-28.3 245.4-245.4 28.3 28.3-245.4 245.4z"
                p-id="2114"
              ></path>
            </svg>
            编辑
          </button>
        </div>
        <div style="display: none;">
          <div class="mb-2" data-type="input">
            <input
              type="text"
              name="school"
              id="school"
              v-bind:value="userInfo.school"
            />
          </div>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="onCancel($event)"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="onSave($event)"
          >
            保存
          </button>
        </div>
      </div>
      <div class="form-item">
        <span style="margin-right: 5em;">专业</span>
        <div>
          <span>{{ userInfo.major }}</span>
          <button type="button" class="btn-edit-xs" @click="onEdit($event)">
            <svg
              t="1582683257274"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2112"
              width="16"
              height="16"
            >
              <path
                d="M308.2 801.133l-74.1-74.1-33.1 91.2v40h505v-40h-445.1z"
                p-id="2113"
              ></path>
              <path
                d="M792.4 151.133l-55.4 5-458.7 458.7-20.7 71.1 91 91 71.1-20.7 458.7-458.7 5-55.4-91-91zM495.9 620.433l-28.3-28.3 245.4-245.4 28.3 28.3-245.4 245.4z"
                p-id="2114"
              ></path>
            </svg>
            编辑
          </button>
        </div>
        <div style="display: none;">
          <div class="mb-2" data-type="input">
            <input
              type="text"
              name="major"
              id="major"
              v-bind:value="userInfo.major"
            />
          </div>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="onCancel($event)"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="onSave($event)"
          >
            保存
          </button>
        </div>
      </div>
      <div class="form-item">
        <span style="margin-right: 5em;">地址</span>
        <div>
          <span>{{ userInfo.address }}</span>
          <button type="button" class="btn-edit-xs" @click="onEdit($event)">
            <svg
              t="1582683257274"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2112"
              width="16"
              height="16"
            >
              <path
                d="M308.2 801.133l-74.1-74.1-33.1 91.2v40h505v-40h-445.1z"
                p-id="2113"
              ></path>
              <path
                d="M792.4 151.133l-55.4 5-458.7 458.7-20.7 71.1 91 91 71.1-20.7 458.7-458.7 5-55.4-91-91zM495.9 620.433l-28.3-28.3 245.4-245.4 28.3 28.3-245.4 245.4z"
                p-id="2114"
              ></path>
            </svg>
            编辑
          </button>
        </div>
        <div style="display: none;">
          <div class="mb-2" data-type="input">
            <input
              type="text"
              name="address"
              id="address"
              v-bind:value="userInfo.address"
            />
          </div>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="onCancel($event)"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="onSave($event)"
          >
            保存
          </button>
        </div>
      </div>
      <div class="form-item">
        <span style="margin-right: 5em;">简介</span>
        <div>
          <span>{{ userInfo.resume }}</span>
          <button type="button" class="btn-edit-xs" @click="onEdit($event)">
            <svg
              t="1582683257274"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2112"
              width="16"
              height="16"
            >
              <path
                d="M308.2 801.133l-74.1-74.1-33.1 91.2v40h505v-40h-445.1z"
                p-id="2113"
              ></path>
              <path
                d="M792.4 151.133l-55.4 5-458.7 458.7-20.7 71.1 91 91 71.1-20.7 458.7-458.7 5-55.4-91-91zM495.9 620.433l-28.3-28.3 245.4-245.4 28.3 28.3-245.4 245.4z"
                p-id="2114"
              ></path>
            </svg>
            编辑
          </button>
        </div>
        <div style="display: none;">
          <div class="mb-2" data-type="textarea">
            <textarea
              name="resume"
              id="resume"
              cols="30"
              rows="4"
              v-model="userInfo.resume"
            ></textarea>
          </div>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            @click="onCancel($event)"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="onSave($event)"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserDetail } from "@/api/user";

export default {
  name: "BasicSetting",
  components: {},
  data: function() {
    return {
      userInfo: {
        username: "",
        avatar: "",
        resume: "",
        address: "",
        sex: "",
        school: "",
        major: ""
      }
    };
  },
  mounted: function() {
    getUserDetail().then(response => {
      const data = response.data;
      this.userInfo = data;
    });
  },
  methods: {
    onEdit(e) {
      e.currentTarget.parentElement.style.display = "none";
      e.currentTarget.parentElement.nextElementSibling.style.display = "block";
    },
    onCancel(e) {
      e.currentTarget.parentElement.style.display = "none";
      e.currentTarget.parentElement.previousElementSibling.style.display =
        "block";
    },
    onSave(e) {
      let parentElement = e.currentTarget.parentElement;
      let firstElementChild = parentElement.firstElementChild;
      let type = firstElementChild.dataset.type;
      if (type == "input" || type == "textarea") {
        let nValue = firstElementChild.firstElementChild.value.replace(
          /(^\s*)|(\s*$)/g,
          ""
        );
        this.userInfo[firstElementChild.firstElementChild.name] = nValue;
      }
      parentElement.style.display = "none";
      parentElement.previousElementSibling.style.display = "block";
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    getFile: function(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("请添加有效的图片");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.userInfo.avatar = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    }
  }
};
</script>
