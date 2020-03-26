<template>
  <div class="error-content">
    <h1>404</h1>
    <h3>出现错误</h3>
    <p>请刷新重试</p>
    <button type="button" class="btn btn-primary btn-round">← 返回主页</button>
  </div>
</template>

<style scoped>
.error-content {
  padding: 0 0.9375rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: column;
  flex-flow: column;
  margin: 120px auto;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.error-content h1 {
  font-size: 210px;
  font-weight: 900;
  text-shadow: 4px 4px 0 #ffffff, 6px 6px 0 #263238;
  line-height: 210px;
}

.error__content h3 {
  font-weight: 500;
  font-size: 2.1875rem;
  margin-bottom: 0.625rem;
}

.error__content p {
  color: #818ea3;
}
</style>
