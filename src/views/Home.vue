<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <div>
    <div class="py-4 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img
              src="../assets/img/img_4.jpg"
              alt=""
              class="w-100"
              style="border-radius: 8px;"
            />
          </div>
          <div class="col-6">
            <router-link :to="{ path: '/developer/center' }">
              <img
                src="../assets/img/img_1.jpg"
                alt=""
                class="w-100"
                style="border-radius: 8px;"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <section
      style="background-color: #ffffff; padding-top: 32px; padding-bottom: 48px; "
    >
      <div class="container ">
        <h3>实验推荐</h3>
        <main class="row ">
          <div class="col-md-3 " v-for="item of recommend" :key="item.id">
            <Card :cover="item.imgUrl" :title="item.name" :id="item.id" />
          </div>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card";
import { getRecommend } from "@/api/experiment";

export default {
  name: "Home",
  components: {
    Card
  },
  data: function() {
    return {
      recommend: []
    };
  },
  mounted: function() {
    getRecommend()
      .then(response => {
        this.recommend = response.data.data;
      })
      .catch(error => {
        window.alert(error);
      });
  }
};
</script>
