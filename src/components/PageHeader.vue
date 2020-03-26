<template>
  <div class="title-region">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: String
  }
};
</script>

<style scoped>
.title-region {
  /* margin: 0 -40px; */
  padding: 0 40px;
  overflow: hidden;
  background: url(https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ);
  background-size: cover;
}
.title-region h1 {
  max-width: 1208px;
  margin: 48px auto 48px;
  font-size: 38px;
  line-height: 46px;
}
</style>
