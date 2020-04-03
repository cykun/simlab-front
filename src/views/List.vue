<template>
  <div>
    <PageHeader :title="title" />
    <section
      style="background-color: #ffffff; padding-top: 32px; padding-bottom: 48px;"
    >
      <div class="container">
        <main class="row">
          <div class="col-md-3" v-for="item of experiments" :key="item.id">
            <Card :cover="item.imgUrl" :title="item.name" :id="item.id" />
          </div>
          <div class="col-12">
            <pagination :current="current" :total="total" />
          </div>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader.vue";
import pagination from "@/components/Pagination.vue";
import { getExperimentList } from "@/api/experiment";

export default {
  name: "List",
  components: {
    Card,
    PageHeader,
    pagination
  },
  data: function() {
    return {
      title: "生物",
      experiments: [],
      current: 1,
      total: 0
    };
  },
  methods: {
    queryList() {
      let type = this.$route.params.type;
      if (type === "physics") {
        this.title = "物理";
      } else if (type === "chemistry") {
        this.title = "化学";
      } else if (type === "biology") {
        this.title = "生物";
      } else if (type === "geography") {
        this.title = "地理";
      } else {
        this.title = "医学";
      }
      getExperimentList(this.title).then(response => {
        let data = response.data.data;
        this.experiments = data.list;
        this.current = data.pageNum;
        this.total = data.pages;
      });
    }
  },
  watch: {
    $route(to, from) {
      // 做一些路由变化的响应
      this.queryList();
    }
  },
  mounted: function() {
    this.queryList();
  }
};
</script>
