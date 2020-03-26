<template>
  <div class="py-4">
    <div class="container">
      <div class="row bg-light">
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
                      v-model="name"
                      placeholder="请输入内容"
                    ></el-input>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">实验类型：</label>
                    <div>
                      <el-select v-model="value" placeholder="请选择">
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
                <label for="">实验简介：</label>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="description"
                >
                </el-input>
              </div>
              <div class="form-group">
                <label for="">实验操作：</label>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="optionDesciript"
                >
                </el-input>
              </div>
              <div class="form-group">
                <label for="">实验文件</label>
                <input type="file" name="" id="" class="file-upload-default" />
                <div class="input-group">
                  <input type="text" class="form-control" />
                  <span class="input-group-append">
                    <input
                      type="button"
                      value="打开文件"
                      class="btn btn-primary"
                    />
                  </span>
                </div>
              </div>
              <div class="form-group">
                <input type="button" class="btn btn-primary" value="提交" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Select, Option} from "element-ui";

export default {
  name: "ExperimentCreate",
  components: {
    ElInput: Input,
    ElSelect: Select,
    ElOption: Option
  },
  data: function() {
    return {
      active: 1,
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
      value: "",
      name: "",
      description: "",
      optionDesciript: ""
    };
  },
  method: {}
};
</script>
