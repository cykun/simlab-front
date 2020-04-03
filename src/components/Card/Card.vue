<template>
  <div class="card">
    <div class="card-box-img">
      <div
        class="card-box-bagimg"
        :style="{ 'background-image': 'url(' + cover + ')' }"
      ></div>
      <router-link :to="{ path: '/detail/' + id }" class="card-operation">
        <div class="card-operation-box"></div
      ></router-link>
    </div>
    <div class="card-body">
      <h6 class="card-title">{{ title }}</h6>
    </div>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  components: {},
  props: {
    id: Number,
    cover: String,
    title: String
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  transition: all 0.5s;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 24px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.4s ease-out;
  transition-delay: 0.1s;
  transform: translateZ(0);
}

.card:hover {
  opacity: 1 !important;
  box-shadow: rgba(45, 45, 45, 0.05) 0px 2px 2px,
    rgba(49, 49, 49, 0.05) 0px 4px 4px, rgba(42, 42, 42, 0.05) 0px 8px 8px,
    rgba(32, 32, 32, 0.05) 0px 16px 16px, rgba(49, 49, 49, 0.05) 0px 32px 32px,
    rgba(35, 35, 35, 0.05) 0px 64px 64px;
  transform: translate(0, -4px);
  -webkit-transform: translate(0, -4px);
  -moz-transform: translate(0, -4px);
  -o-transform: translate(0, -4px);
  z-index: 999;
}

.card-box-img {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 192px;
}

.card-box-bagimg {
  width: 100%;
  height: 192px;
  margin: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.card-operation {
  padding: 2px 0 6px 0;
  background-color: #010101;
  opacity: 0;
  width: 100%;
  position: absolute;
  top: 0px;
  text-align: right;
  height: 100%;
  left: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  transition: opacity 0.4s ease-in-out;
  transition-property: opacity;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.card-operation-box {
  float: right;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-operation-box img {
  border-radius: 0;
  margin-top: 8px;
  opacity: 0.8;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}
</style>
