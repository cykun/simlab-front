<template>
  <div id="app">
    <Header v-if="$route.meta.keepAlive" />
    <main class="content">
      <router-view />
    </main>
    <Footer v-if="$route.meta.keepAlive" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background: #f0f2f5;
}
.content {
  flex: 1 1 auto;
}
</style>
