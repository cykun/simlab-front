<template>
  <div>
    <iframe
      v-bind:src="experimentUrl"
      allowfullscreen
      frameborder="0"
      scrolling="no"
    ></iframe>
    <el-dialog
      title="填写实验报告"
      :visible.sync="dialogVisible"
      width="60%"
      :close-on-click-modal="false"
      @opened="showDialog"
      @closed="closeDialog"
    >
      <div ref="editor" style="text-align:left"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUploadReport">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Dialog, Button } from "element-ui";
import E from "wangeditor";
import { uploadRecord, uploadReport } from "@/api/experiment";

export default {
  name: "ExperimentStart",
  components: {
    ElDialog: Dialog,
    ElButton: Button
  },
  data: function() {
    return {
      experimentUrl: this.$route.query.experimentUrl,
      dialogVisible: false,
      editorContent: "",
      score: 0,
      period: 0,
      editor: null
    };
  },
  methods: {
    receiveMessage(event) {
      this.score = event.data.score;
      this.period = event.data.period;
      if (this.$route.query.taskId) {
        this.dialogVisible = true;
      }
      uploadRecord({
        score: this.score,
        period: this.period,
        experimentId: this.$route.query.id
      });
    },
    showDialog() {
      this.editor = new E(this.$refs.editor);
      this.editor.customConfig.onchange = html => {
        this.editorContent = html;
      };
      this.editor.create();
      this.editor.txt.html(
        "<h4>一、实验目的和要求</h4><h4>二、实验原理</h4><h4>三、实验步骤</h4>"
      );
    },
    closeDialog() {
      this.$refs.editor.innerHTML = "";
    },
    handleUploadReport() {
      uploadReport({
        taskId: this.$route.query.taskId,
        report: this.editorContent,
        score: this.score,
        period: this.period
      }).then(response => {
        this.dialogVisible = false;
      });
    }
  },
  created: function() {
    window.addEventListener("message", this.receiveMessage, false);
  },
  beforeDestroy: function() {
    window.removeEventListener("message", this.receiveMessage, false);
  }
};
</script>
<style scoped>
iframe {
  width: 100%;
  height: 95vh;
  border: 0;
  padding: 0;
  margin: 0;
}
</style>
