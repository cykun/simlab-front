<template>
  <el-popover placement="bottom" width="200" trigger="click" class="mx-4">
    <div>
      <router-link
        :to="{ path: '/list/physics' }"
        class="dropdown-item d-flex align-items-center"
      >
        <div class="dropdown-list-image mr-3">
          <img
            src="@/assets/header/physics.svg"
            alt="physics"
            class="img-fluid"
          />
        </div>
        <div>
          <div>物理</div>
          <div class="small">实验数量<span class="ml-2">0</span></div>
        </div>
      </router-link>
      <router-link
        :to="{ path: '/list/chemistry' }"
        class="dropdown-item d-flex align-items-center"
      >
        <div class="dropdown-list-image mr-3">
          <img
            src="@/assets/header/chemistry.svg"
            alt="physics"
            class="img-fluid"
          />
        </div>
        <div>
          <div>化学</div>
          <div class="small">实验数量<span class="ml-2">0</span></div>
        </div>
      </router-link>
      <router-link
        :to="{ path: '/list/biology' }"
        class="dropdown-item d-flex align-items-center"
      >
        <div class="dropdown-list-image mr-3">
          <img
            src="@/assets/header/biology.svg"
            alt="physics"
            class="img-fluid"
          />
        </div>
        <div>
          <div>生物</div>
          <div class="small ">实验数量<span class="ml-2">0</span></div>
        </div>
      </router-link>
      <router-link
        :to="{ path: '/list/geography' }"
        class="dropdown-item d-flex align-items-center "
      >
        <div class="dropdown-list-image mr-3">
          <img
            src="@/assets/header/geography.svg"
            alt="physics"
            class="img-fluid"
          />
        </div>
        <div>
          <div>地理</div>
          <div class="small ">实验数量<span class="ml-2">0</span></div>
        </div>
      </router-link>
      <router-link
        :to="{ path: '/list/medicine' }"
        class="dropdown-item d-flex align-items-center "
      >
        <div class="dropdown-list-image mr-3">
          <img
            src="@/assets/header/medicine.svg"
            alt="physics"
            class="img-fluid"
          />
        </div>
        <div>
          <div>医学</div>
          <div class="small ">实验数量<span class="ml-2">0</span></div>
        </div>
      </router-link>
    </div>
    <div slot="reference">
      <img
        style="vertical-align: middle;"
        src="@/assets/img/list.svg"
        alt="List"
      />
      <a style="vertical-align: middle;">实验分类</a>
    </div>
  </el-popover>
</template>

<script>
import { Popover } from "element-ui";

export default {
  name: "Category",
  components: {
    ElPopover: Popover
  }
};
</script>
