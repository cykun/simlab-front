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
            <div class="class-list">
              <p class="mt-4 mb-3">我的班级</p>
              <li
                v-for="item in classMine"
                :key="item.id"
                v-bind:class="{ active: tabIndex == item.id }"
                @click="handleClassItemClick(item.id, 'm')"
              >
                <a><i class="ri-group-line"></i>{{ item.name }}</a>
              </li>
              <p class="mt-4 mb-3">加入的班级</p>
              <li
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
        <el-input v-model="classNameCreate" placeholder="班级名"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCreateClass = false">取 消</el-button>
        <el-button type="primary" @click="handleCreateClass">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="加入班级" :visible.sync="dialogAddClass" width="30%">
      <div>
        请输入班级号
        <el-input v-model="classJoinForm.classId"></el-input>
        请输入显示的名称
        <el-input v-model="classJoinForm.name"></el-input>
        请输入学号
        <el-input v-model="classJoinForm.sno"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddClass = false">取 消</el-button>
        <el-button type="primary" @click="handleJoinClass">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style scoped>
.class-list {
  list-style: none;
}
.class-list .active {
  color: #827af3;
  background: #e0defc;
}
.class-list li {
  border-radius: 25px;
}
.class-list li a {
  padding: 10px 15px;
  display: block;
}
</style>
<script>
import { Card, Button, Dialog, Input } from "element-ui";
import {
  getClassListMine,
  getClassListjoined,
  createClass,
  joinClass
} from "@/api/class";

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
      tabIndex: this.$route.params.id,
      dialogAddClass: false,
      dialogCreateClass: false,
      classMine: [],
      classJoined: [],
      classNameCreate: "",
      classJoinForm: {
        classId: "",
        name: "",
        sno: ""
      }
    };
  },
  mounted: function() {
    getClassListMine().then(response => {
      this.classMine = response.data.data;
    });
    getClassListjoined().then(response => {
      this.classJoined = response.data.data;
    });
  },
  methods: {
    handleClassItemClick(index, type) {
      if (this.$route.params.id == index) return;
      this.tabIndex = index;
      if (type === "m") {
        this.$router.replace({ path: "/class/manager/" + index });
      } else {
        this.$router.replace({ path: "/class/student/" + index });
      }
    },
    handleCreateClass() {
      if (this.classNameCreate != "") {
        createClass(this.classNameCreate).then(response => {
          this.classMine.push(response.data.data);
        });
      }
      this.dialogCreateClass = false;
    },
    handleJoinClass() {
      joinClass({
        classId: this.classJoinForm.classId,
        name: this.classJoinForm.name,
        sno: this.classJoinForm.sno
      }).then(response => {
        if (response.data.code === 200) {
          this.classJoined.push(response.data.data);
          this.dialogAddClass = false;
        } else {
          window.alert(response.data.msg);
        }
      });
    }
  }
};
</script>
