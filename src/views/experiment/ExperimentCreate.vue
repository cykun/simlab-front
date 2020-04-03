<template>
  <div class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="ant-card">
            <div class="ant-card-body">
              <h6>提交实验</h6>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">实验名：</label>
                    <el-input
                      v-model="form.name"
                      placeholder="请输入内容"
                    ></el-input>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">实验类型：</label>
                    <div>
                      <el-select v-model="form.type" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="">实验简要：</label>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="form.concise"
                >
                </el-input>
              </div>
              <div class="form-group">
                <label for="">详细介绍：</label>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="form.description"
                >
                </el-input>
              </div>
              <div class="form-group">
                <label for="">操作说明：</label>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="form.operation"
                >
                </el-input>
              </div>
              <div class="form-group" style="width: 360px">
                <label for="">实验文件(包含视频，图片，实验文件)</label>
                <el-upload
                  ref="upload"
                  drag
                  action=""
                  :limit="3"
                  :file-list="fileList"
                  :auto-upload="false"
                  :on-change="handleChange"
                  :on-remove="handleRemove"
                  multiple
                >
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">
                    将文件拖到此处，或<em>点击上传</em>
                  </div>
                  <div class="el-upload__tip" slot="tip">
                    只能上传jpg/png文件，且不超过500kb
                  </div>
                </el-upload>
              </div>
              <div class="form-group">
                <el-button type="primary" @click="handleSubmit"
                  >提交<i class="el-icon-upload el-icon--right"></i
                ></el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Select, Option, Button, Upload } from "element-ui";
import { uploadExperiment } from "@/api/experiment";

export default {
  name: "ExperimentCreate",
  components: {
    ElInput: Input,
    ElSelect: Select,
    ElOption: Option,
    ElUpload: Upload,
    ElButton: Button
  },
  data: function() {
    return {
      options: [
        {
          value: "物理",
          label: "物理"
        },
        {
          value: "化学",
          label: "化学"
        },
        {
          value: "生物",
          label: "生物"
        },
        {
          value: "地理",
          label: "地理"
        },
        {
          value: "医学",
          label: "医学"
        }
      ],
      form: {
        name: "",
        type: "",
        concise: "",
        description: "",
        operation: "",
        files: []
      },
      fileList: []
    };
  },
  methods: {
    handleChange(file, fileList) {
      if (file.status === "ready") {
        this.form.files.push(file.raw);
      }
    },
    handleRemove(file, fileList) {
      let index = this.form.files.indexOf(file.raw);
      this.form.files.splice(index, 1);
    },
    handleSubmit() {
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("type", this.form.type);
      formData.append("concise", this.form.concise);
      formData.append("description", this.form.description);
      formData.append("operation", this.form.operation);
      for (let i = 0; i < this.form.files.length; i++) {
        formData.append("files", this.form.files[i]);
      }
      uploadExperiment(formData)
        .then(response => {
          window.alert(response.code);
        })
        .catch(error => {
          window.alert(error);
        });
    }
  }
};
</script>
