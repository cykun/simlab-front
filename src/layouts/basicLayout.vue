<template>
  <div class="layout">
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "BasicLayout",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

.content {
  flex: 1 1 auto;
}
</style>
