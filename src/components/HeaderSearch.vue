<template>
  <div class="dropdown">
    <form class="d-flex" action="#">
      <input class="form-search" type="text" placeholder="搜索" />
      <a class="input-icon-addon" href="#">
        <img src="../assets/img/search.svg" alt="Search" />
      </a>
    </form>
    <div class="dropdown-menu dropdown-list" style="width: 100%;">
      <div class="dropdown-header">热门搜索</div>
      <a href="# " class="dropdown-item">XXXX实验</a>
      <a href="# " class="dropdown-item">XXXX实验</a>
      <a href="# " class="dropdown-item">XXXX实验</a>
      <a href="# " class="dropdown-item">XXXX实验</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  components: {},
  data: function() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.form-search {
  outline: none;
  padding: 12px 15px;
  color: #000;
  font-size: 0.9rem;
  border: none;
  letter-spacing: 1px;
  background: #f7f7f7;
}
.input-icon-addon {
  min-width: 2.5rem;
  background-color: #495057;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
