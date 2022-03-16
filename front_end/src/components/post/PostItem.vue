<template>
  <div @click="clickItem(postId)">
    <div class="tit">{{ post.title }}</div>
    <div class="content">{{ post.content }}</div>
    <div class="bot">
      <span>{{ name }}• </span>
      <span>{{ time }}• </span>
      <span>{{ counts }}条回复</span>
    </div>
  </div>
</template>

<script>
import { parseTime } from "../../util/parseTime";
import { getComments } from "../../api/post";
import { getUser } from "../../api/user";

export default {
  name: "PostItem",

  data() {
    return {
      counts: 0, //该条帖子的回复数
      name: "" //该帖子作者用户名
    };
  },

  props: {
    //父组件向子组件传递对象
    post: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  computed: {
    time() {
      return parseTime(this.post.time);
    },
    postId() {
      return this.post.postId;
    },
    userId() {
      return this.post.userId;
    }
  },

  methods: {
    clickItem(postId) {
      this.$router.push(`/posts/comments/${postId}`);
    },

    init() {
      getComments(this.postId).then(res => {
        this.counts = res.length;
      });

      getUser(this.userId).then(res => {
        this.name = res.uname;
      });
    }
  },

  created() {
    this.init();
  }
};
</script>

<style scoped>
.tit {
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.bot {
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 14px;
}
</style>
