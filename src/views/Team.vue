<template>
  <div class="contact my-5">
    <div class="container">
      <div class="section-title">
        <h1>我们的团队</h1>
      </div>
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="member">
            <div class="pic">
              <img
                class="img-fluid"
                src="http://127.0.0.1/img/202031000002.jpeg"
                alt=""
              />
            </div>
            <div class="member-info">
              <h4>Cykun</h4>
              <span>程序员</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="member">
            <div class="pic">
              <img
                class="img-fluid"
                src="http://127.0.0.1/img/202031000002.jpeg"
                alt=""
              />
            </div>
            <div class="member-info">
              <h4>Cykun</h4>
              <span>程序员</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="member">
            <div class="pic">
              <img
                class="img-fluid"
                src="http://127.0.0.1/img/202031000002.jpeg"
                alt=""
              />
            </div>
            <div class="member-info">
              <h4>Cykun</h4>
              <span>程序员</span>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="member">
            <div class="pic">
              <img
                class="img-fluid"
                src="http://127.0.0.1/img/202031000002.jpeg"
                alt=""
              />
            </div>
            <div class="member-info">
              <h4>Cykun</h4>
              <span>程序员</span>
            </div>
          </div>
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

.member {
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}

.member .pic {
  border-radius: 4px;
  overflow: hidden;
}

.member .member-info {
  position: absolute;
  bottom: -48px;
  left: 20px;
  right: 20px;
  background: linear-gradient(
    360deg,
    #5c768d 0%,
    rgba(92, 118, 141, 0.9) 35%,
    rgba(140, 167, 191, 0.8) 100%
  );
  padding: 15px 0;
  border-radius: 4px;
}

.member h4 {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 16px;
  color: #fff;
  position: relative;
  padding-bottom: 10px;
}

.member h4::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #fff;
  bottom: 0;
  left: calc(50% - 25px);
}

.member span {
  font-style: italic;
  display: block;
  font-size: 13px;
  color: #fff;
}
</style>
