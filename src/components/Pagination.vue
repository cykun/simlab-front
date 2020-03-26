<template>
  <ul class="pagination" style="list-style: none; padding: 0;">
    <li>
      <a @click="handlePre">
        <span><img src="@/assets/img/left.svg" alt="left"/></span>
      </a>
    </li>
    <li v-for="o in total" :key="o" :class="{ active: current === o }">
      <a>{{ o }}</a>
    </li>
    <li>
      <a @click="handleNext">
        <span><img src="@/assets/img/right.svg" alt="left"/></span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "pagination",
  props: {
    current: Number,
    total: Number
  },
  methods: {
    handlePre() {
      if (this.current > 1) this.current--;
    },
    handleNext() {
      if (this.current < this.total) this.current++;
    }
  }
};
</script>

<style scoped>
.pagination {
  box-shadow: 0px 0px 20px #dddfe1;
  float: right;
  border-radius: 8px;
  margin: 20px 0;
}

.pagination > li {
  display: inline;
}

.pagination > li:first-child > a {
  padding: 13px 20px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
}

.pagination > li:last-child > a {
  padding: 13px 20px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
}

.pagination a {
  float: left;
  padding: 15px 23px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(40, 47, 54, 1);
  line-height: 28px;
  margin-left: -1px;
  text-decoration: none;
  border: 1px solid #f6f6f6 !important;
}

.pagination > .active > a,
.pagination a:hover {
  background-color: #fd3554ff;
  color: #fff;
}
</style>
