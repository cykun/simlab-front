<template>
  <div class="ant-comment">
    <div class="ant-comment-inner">
      <div class="ant-comment-avatar">
        <span class="ant-avatar avatar-image">
          <img v-bind:src="avatar" alt="Avator" />
        </span>
      </div>
      <div class="ant-comment-content">
        <div class="ant-comment-content-author">
          <span class="ant-comment-content-author">{{ author }}</span>
          <span class="ant-comment-content-author-time">
            <time>{{ datetime }}</time>
          </span>
        </div>
        <div class="ant-comment-content-detail">
          <p>{{ content }}</p>
        </div>
        <ul class="ant-comment-actions">
          <li>
            <span>
              <i class="anticon ri-thumb-up-line"></i>
              <span style="padding-left: 8px; cursor: auto;">{{ likes }}</span>
            </span>
          </li>
          <li>
            <span>
              <i class="anticon ri-thumb-down-line"></i>
              <span style="padding-left: 8px; cursor: auto;">{{
                dislikes
              }}</span>
            </span>
          </li>
          <li><span>回复</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Avatar } from "element-ui";
export default {
  name: "Comment",
  components: {},
  props: {
    avatar: String,
    author: String,
    datetime: String,
    content: String,
    likes: Number,
    dislikes: Number
  },
  data: function() {
    return {};
  },
  method: {}
};
</script>
