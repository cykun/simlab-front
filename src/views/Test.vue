<template>
  <button @click="open">点我</button>
</template>

<script>
export default {
  name: "Test",
  methods: {
    open() {
      this.$message("这是一条消息");
    }
  }
};
</script>
