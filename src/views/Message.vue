<template>
  <div class="my-5">
    <div class="container">
      <div class="col-lg-12">
        <el-card>
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{ prop: 'date', order: 'descending' }"
          >
            <el-table-column prop="date" label="日期" sortable width="180">
            </el-table-column>
            <el-table-column prop="from" label="来自" sortable width="180">
            </el-table-column>
            <el-table-column prop="address" label="内容" :formatter="formatter">
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, Table, TableColumn, Tag } from "element-ui";

export default {
  name: "Message",
  components: {
    ElCard: Card,
    ElTable: Table,
    ElTableColumn: TableColumn
  },
  data: function() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          from: "系统",
          address: "这是一条消息"
        },
        {
          date: "2016-05-04",
          from: "系统",
          address: "这是一条消息"
        },
        {
          date: "2016-05-03",
          from: "系统",
          address: "这是一条消息"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
};
</script>
