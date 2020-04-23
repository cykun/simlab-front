<template>
  <div class="py-4 bg-light">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-6">
          <h4>你好！开发者</h4>
          <h1 class="mb-4">仿真实验室开发者中心</h1>
          <router-link
            :to="{ name: 'ExperimentCreate' }"
            class="btn btn-secondary"
            >提交你的专属仿真实验</router-link
          >
        </div>
        <div class="col-lg-6 offset-xl-1">
          <img
            src="https://vslab.oss-cn-shenzhen.aliyuncs.com/img/20200329001.png"
            alt="Img"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <h4>开发资源</h4>
        </div>
        <div class="col-md-6">
          <el-card class="box-card">
            资源
          </el-card>
        </div>
        <div class="col-md-6">
          <el-card class="box-card">
            文档
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from "element-ui";

export default {
  name: "DevelopCenter",
  components: {
    ElCard: Card
  },
  data: function() {
    return {};
  }
};
</script>
