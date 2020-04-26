<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="班级成员" name="first">
      <el-table :data="memberData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="90"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="sno" label="学号" width="180"> </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="班级任务" name="second">
      <el-table :data="taskData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="60"> </el-table-column>
        <el-table-column prop="content" label="内容" width="240">
        </el-table-column>
        <el-table-column prop="experimentId" label="实验号" width="120">
        </el-table-column>
        <el-table-column prop="endTime" label="结束时间" width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleStart(scope.$index, scope.row)"
              >开始实验</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { Tabs, TabPane, Table, TableColumn, Button } from "element-ui";
import { getMemberList, getTaskList } from "@/api/class";
import { getExperimentUrl } from "@/api/experiment";

export default {
  name: "Student",
  components: {
    ElTabs: Tabs,
    ElTabPane: TabPane,
    ElTable: Table,
    ElTableColumn: TableColumn,
    ElButton: Button
  },
  data: function() {
    return {
      activeName: "first",
      memberData: [],
      taskData: []
    };
  },
  mounted: function() {
    getMemberList(this.$route.params.id).then(response => {
      this.memberData = response.data.data;
    });
    getTaskList(this.$route.params.id).then(response => {
      this.taskData = response.data.data;
    });
  },
  methods: {
    handleStart(index, row) {
      getExperimentUrl(row.experimentId).then(response => {
        let data = response.data.data;
        if (data) {
          this.$router.push({
            path: "/experiment/start",
            query: {
              experimentUrl: data,
              id: row.experimentId,
              taskId: row.id
            }
          });
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      // 做一些路由变化的响应
      getMemberList(this.$route.params.id).then(response => {
        this.memberData = response.data.data;
      });
      getTaskList(this.$route.params.id).then(response => {
        this.taskData = response.data.data;
      });
    }
  }
};
</script>
