<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="班级成员" name="first">
        <el-table :data="memberData" style="width: 100%">
          <el-table-column prop="id" label="ID" width="90"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="sno" label="学号" width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <!-- <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >私信</el-button
              > -->
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="班级任务" name="second">
        <div>
          <el-button
            type="primary"
            icon="ri-add-line"
            circle
            @click="dialogFormVisible = true"
          ></el-button>
          <el-table :data="taskData" style="width: 100%">
            <el-table-column prop="id" label="ID" width="60"> </el-table-column>
            <el-table-column prop="content" label="内容" width="240">
            </el-table-column>
            <el-table-column prop="experimentId" label="实验号" width="180">
            </el-table-column>
            <el-table-column prop="endTime" label="结束时间" width="180">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleCheck(scope.$index, scope.row)"
                  >查看</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-dialog title="发布新任务" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="内容" :label-width="formLabelWidth">
                <el-input v-model="form.content" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="实验号" :label-width="formLabelWidth">
                <el-input
                  v-model="form.experimentId"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="结束时间" :label-width="formLabelWidth">
                <el-date-picker
                  v-model="form.endTime"
                  type="date"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="handleCreateTask"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <el-dialog title="实验结果" :visible.sync="dialogTableVisible">
            <el-table :data="taskResultData">
              <el-table-column
                property="sno"
                label="学号"
                width="150"
              ></el-table-column>
              <el-table-column
                property="name"
                label="姓名"
                width="150"
              ></el-table-column>
              <el-table-column
                property="score"
                label="成绩"
                width="120"
              ></el-table-column>
              <el-table-column
                property="period"
                label="时长"
                width="120"
              ></el-table-column>
              <el-table-column label="报告">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleCheckReport(scope.$index, scope.row)"
                    >查看报告</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-dialog>
          <el-dialog
            title="实验报告"
            :visible.sync="dialogReportVisible"
            :close-on-click-modal="false"
          >
            <div v-html="reportTemp"></div>
          </el-dialog>
        </div>
      </el-tab-pane>
      <el-tab-pane label="班级设置" name="fourth">
        <el-form
          :model="classInfo"
          status-icon
          label-width="100px"
          style="width: 460px"
        >
          <el-form-item label="班级ID">
            <el-input
              v-model="classInfo.id"
              autocomplete="off"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="班级名称">
            <el-input v-model="classInfo.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">提交</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {
  Tabs,
  TabPane,
  FormItem,
  Input,
  Button,
  Form,
  DatePicker,
  Dialog,
  Table,
  TableColumn
} from "element-ui";
import {
  getMemberList,
  getTaskList,
  createTask,
  getTaskResultList
} from "@/api/class";

export default {
  name: "Manager",
  components: {
    ElTabs: Tabs,
    ElTabPane: TabPane,
    ElForm: Form,
    ElFormItem: FormItem,
    ElInput: Input,
    ElButton: Button,
    ElDatePicker: DatePicker,
    ElDialog: Dialog,
    ElTable: Table,
    ElTableColumn: TableColumn
  },
  data: function() {
    return {
      activeName: "first",
      dialogFormVisible: false,
      dialogTableVisible: false,
      dialogReportVisible: false,
      formLabelWidth: "120px",
      form: {
        classId: this.$route.params.id,
        content: "",
        experimentId: "",
        endTime: ""
      },
      memberData: [],
      taskData: [],
      taskResultData: [
        {
          sno: "031602542",
          name: "郑西坤",
          score: 85,
          period: 120,
          report: "www.baidu.com"
        }
      ],
      reportTemp: "",
      classInfo: {
        id: 2,
        name: "hahh"
      }
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
    handleCheck(index, row) {
      getTaskResultList(row.id).then(response => {
        this.taskResultData = response.data.data;
      });
      this.dialogTableVisible = true;
    },
    handleCheckReport(index, row) {
      this.dialogReportVisible = true;
      this.reportTemp = row.report;
    },
    handleCreateTask() {
      createTask({
        classId: this.$route.params.id,
        content: this.form.content,
        experimentId: this.form.experimentId,
        endTime: this.form.endTime
      }).then(response => {
        this.taskData.push(response.data.data);
        this.dialogFormVisible = false;
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
