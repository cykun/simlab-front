<template>
  <div class="my-4">
    <div class="container">
      <div class="row">
        <div class="col-md-3 px-1">
          <el-card shadow="never">
            <el-button
              type="primary"
              round
              class="btn-block"
              @click="dialogCreateClass = true"
              >创建班级</el-button
            >
            <el-button
              round
              class="btn-block mt-2 mx-0"
              @click="dialogAddClass = true"
              >加入班级</el-button
            >
            <div class="navbar-nav">
              <p class="mt-4 mb-3">我的班级</p>
              <li
                class="nav-link"
                v-for="item in classMine"
                :key="item.id"
                v-bind:class="{ active: tabIndex == item.id }"
                @click="handleClassItemClick(item.id, 'm')"
              >
                <a><i class="ri-group-line"></i>{{ item.name }}</a>
              </li>
              <p class="mt-4 mb-3">加入的班级</p>
              <li
                class="nav-link"
                v-for="item in classJoined"
                :key="item.id"
                v-bind:class="{ active: tabIndex == item.id }"
                @click="handleClassItemClick(item.id)"
              >
                <a><i class="ri-group-line"></i>{{ item.name }}</a>
              </li>
            </div>
          </el-card>
        </div>
        <div class="col-md-9 px-1">
          <el-card shadow="never">
            <span style="float: right; padding: 3px 0" class="small"
              >班级id:{{ tabIndex }}</span
            >
            <router-view></router-view>
          </el-card>
        </div>
      </div>
    </div>
    <el-dialog title="创建班级" :visible.sync="dialogCreateClass" width="30%">
      <div>
        请输入班级名
        <el-input></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCreateClass = false">取 消</el-button>
        <el-button type="primary" @click="dialogCreateClass = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="加入班级" :visible.sync="dialogAddClass" width="30%">
      <div>
        请输入班级号
        <el-input></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddClass = false">取 消</el-button>
        <el-button type="primary" @click="dialogAddClass = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<style scoped>
.nav-link.active {
  color: #827af3;
  background: #e0defc;
}
</style>
<script>
import { Card, Button, Dialog, Input } from "element-ui";
export default {
  name: "Class",
  components: {
    ElCard: Card,
    ElButton: Button,
    ElDialog: Dialog,
    ElInput: Input
  },
  data: function() {
    return {
      tabIndex: 0,
      dialogAddClass: false,
      dialogCreateClass: false,
      classMine: [
        {
          id: 3,
          name: "cykun的班级"
        }
      ],
      classJoined: [
        {
          id: 2,
          name: "它的班级"
        }
      ]
    };
  },
  methods: {
    handleClassItemClick(index, type) {
      if (this.$route.params.id == index) return;
      this.tabIndex = index;
      if (type === "m") {
        this.$router.push({ path: "/class/manager/" + index });
      } else {
        this.$router.push({ path: "/class/student/" + index });
      }
    }
  }
};
</script>
