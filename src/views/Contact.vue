<template>
  <div class="contact my-4">
    <div class="container">
      <div class="section-title">
        <h1>联系我们</h1>
      </div>
      <div class="row">
        <div class="col-lg-6 d-flex">
          <div class="info-box">
            <h3>我们的地址</h3>
            <p>中国福建</p>
          </div>
        </div>
        <div class="col-lg-3 d-flex">
          <div class="info-box">
            <h3>邮件</h3>
            <p>zhengxk1122@139.com</p>
          </div>
        </div>
        <div class="col-lg-3 d-flex">
          <div class="info-box">
            <h3>QQ</h3>
            <p>2472685023</p>
          </div>
        </div>
        <div class="col-lg-12">
          <form action="" class="email-form">
            <div class="row form-group">
              <div class="col-lg-6">
                <input
                  class="form-control"
                  type="text"
                  name=""
                  id=""
                  placeholder="你的名字"
                />
              </div>
              <div class="col-lg-6">
                <input
                  class="form-control"
                  type="text"
                  name=""
                  id=""
                  placeholder="你的邮箱"
                />
              </div>
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                name=""
                id=""
                placeholder="主题"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="内容"
              ></textarea>
            </div>
            <div class="text-center">
              <button class="btn btn-primary">发送</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.contact .info-box {
  color: #444;
  text-align: center;
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 20px 0 30px 0;
  margin-bottom: 30px;
  width: 100%;
  background-color: #ffffff;
}

.contact .email-form {
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 30px;
  background-color: #ffffff;
}
</style>
