<template>
  <div class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 px-1">
          <div class="ant-card">
            <div class="ant-card-body">
              <img
                class="img-fluid"
                src="@/assets/img/experiment/exp2.jpg"
                alt=""
              />
              <div class="mt-2" style="text-align: center;">
                <h6>XXXX仿真实验</h6>
              </div>
              <hr />
              <div>
                <p>实验点击数：<span>0</span></p>
                <p>浏览数：<span>0</span></p>
                <p>提交事件：<span>2020/2/29</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 px-1">
          <div class="ant-card">
            <div class="ant-card-body">
              <h6>实验设置</h6>
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
                <label for="">实验描述：</label>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="description"
                >
                </el-input>
              </div>
              <div class="form-group">
                <label for="">软件要求：</label>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="requirition"
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
                <label for="">实验特色：</label>
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="feature"
                >
                </el-input>
              </div>
              <div class="form-group">
                <input type="button" class="btn btn-primary" value="提交更改" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Select, Option } from "element-ui";

export default {
  name: "ExperimentEdit",
  components: {
    ElInput: Input,
    ElSelect: Select,
    ElOption: Option
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
      value: "",
      name: "",
      description: "",
      requirition: "",
      optionDesciript: "",
      feature: ""
    };
  },
  method: {}
};
</script>
