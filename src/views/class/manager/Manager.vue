<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="班级成员" name="first">
        <el-table :data="studentData" style="width: 100%">
          <el-table-column prop="id" label="ID" width="90"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="sno" label="学号" width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >私信</el-button
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
            <el-table-column prop="title" label="标题" width="120">
            </el-table-column>
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
              <el-form-item label="标题" :label-width="formLabelWidth">
                <el-input v-model="form.title" autocomplete="off"></el-input>
              </el-form-item>
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
              <el-button type="primary" @click="dialogFormVisible = false"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <el-dialog title="实验结果" :visible.sync="dialogTableVisible">
            <el-table :data="experimentResult">
              <el-table-column
                property="sno"
                label="学号"
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
          <el-dialog title="实验报告" :visible.sync="dialogReportVisible">
            <div>15151515</div>
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
        title: "",
        content: "",
        experimentId: "",
        endTime: ""
      },
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
          endTime: "2020/4/22"
        }
      ],
      experimentResult: [
        {
          id: 5,
          sno: "031602542",
          score: 85,
          period: 120,
          report: "www.baidu.com"
        }
      ],
      classInfo: {
        id: 2,
        name: "hahh"
      }
    };
  },
  methods: {
    handleCheck(index, row) {
      this.dialogTableVisible = true;
    },
    handleCheckReport(index, row) {
      this.dialogReportVisible = true;
    }
  }
};
</script>
