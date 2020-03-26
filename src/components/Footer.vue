<template>
  <footer class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div>
            <router-link :to="{ path: '/' }" class="navbar-brand "
              >Cykun仿真实验室</router-link
            >
          </div>
          <p>
            仿真实验没有普通意义上实验的必备器材，而是<br />在计算机上用仿真软件模拟现实的效果,用软件<br />模拟实验条件是一条可行性非常高的路。
          </p>
        </div>
        <div class="col-lg-3 ">
          <h6>地址</h6>
          <p>地址：中国福建</p>
          <p>手机：13695932659</p>
          <p>
            邮件：
            <a href="mailto:13695932659@139.com ">13695932659@139.com</a>
          </p>
        </div>
        <div class="col-lg-2 ">
          <h6>链接</h6>
          <ul class="list-unstyled ">
            <li>
              <router-link :to="{ path: '/about' }">关于</router-link>
            </li>
            <li><router-link :to="{ path: '/team' }">团队</router-link></li>
            <li><router-link :to="{ path: '/contact' }">联系</router-link></li>
          </ul>
        </div>
        <div class="col-lg-2 ">
          <h6>开发者</h6>
          <ul class="list-unstyled ">
            <li>
              <router-link :to="{ path: '/developer/docment' }"
                >文档</router-link
              >
            </li>
            <li><a href=" ">支持</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyrights ">
      <p style="line-height: 48px; margin: 0; ">
        Copyright © 2020 Cykun(郑西坤). All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
