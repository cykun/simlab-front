<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="班级成员" name="first">
      <el-table :data="studentData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="90"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="sno" label="学号" width="180"> </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="班级任务" name="second">
      <el-table :data="taskData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="60"> </el-table-column>
        <el-table-column prop="title" label="标题" width="120">
        </el-table-column>
        <el-table-column prop="content" label="内容" width="240">
        </el-table-column>
        <el-table-column prop="experimentId" label="实验号" width="80">
        </el-table-column>
        <el-table-column prop="endTime" label="结束时间" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="120">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleCheck(scope.$index, scope.row)"
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
      studentData: [
        {
          id: "3",
          name: "王小虎",
          sno: "031602555"
        },
        {
          id: "5",
          name: "王小虎",
          sno: "031602556"
        },
        {
          id: "7",
          name: "王小虎",
          sno: "031602557"
        },
        {
          id: "12",
          name: "王小虎",
          sno: "031602558"
        }
      ],
      taskData: [
        {
          id: "3",
          title: "实验",
          content: "完成过氧化氢制取延期实验",
          experimentId: "2",
          endTime: "2020/4/22",
          status: "已提交"
        }
      ]
    };
  }
};
</script>
