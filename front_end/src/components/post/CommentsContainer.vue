<!--显示一条帖子的所有评论-->
<template>
  <div>
    <v-app-bar color="deep-purple lighten-3" dense dark>
      <v-icon class="ico" middle color="white">mdi-message-text</v-icon>
      <v-toolbar-title class="cursor">
        当前帖子
      </v-toolbar-title>
    </v-app-bar>
    <div class="conta">
      <div>
        <v-card>
          <div class="container">
            <div class="titl">{{ title }}</div>

            <div class="message">
              <span class="name" color="gray">{{ name }}• </span>
              <span class="time">{{ time }}•</span>
              <span>{{ count }}条回复 </span>
            </div>

            <v-divider></v-divider>
            <div class="content">
              <div v-for="(line, index) in contentlines" :key="index">
                <p>{{ line }}</p>
              </div>
            </div>
          </div>
        </v-card>
      </div>

      <div class="comments">
        <div
          v-for="comment in comments"
          :key="comment.commentId"
          class="comment"
        >
          <comments-item :comment="comment"></comments-item>
        </div>
      </div>
      <div class="addComments">
        <add-comments
          :post-id="postId"
        ></add-comments>
      </div>
    </div>
  </div>
</template>

<script>
import CommentsItem from "./CommentsItem";
import addComments from "./addComments";
import { getComments, getPostById } from "../../api/post";
import { parseTime } from "../../util/parseTime";
import { getUser } from "../../api/user";

export default {
  name: "CommentsContainer",

  data() {
    return {
      title: "",
      name: "",
      content: "",
      time: "",
      count: 0,
      userId: 0, //标记此条评论是哪个用户发的
      comments: []
    };
  },

  components: {
    CommentsItem,
    addComments
  },

  methods: {
    init() {
      getComments(this.postId).then(res => {
        let data = res;
        this.count = data.length;
        this.comments = data;
      });
      // console.log(this.comments);

      getPostById(this.postId).then(res => {
        this.userId = res.userId;
        this.title = res.title;
        this.content = res.content;
        this.time = parseTime(res.time);
        getUser(this.userId).then(res => {
          this.name = res.uname;
        });
      });
    }
  },

  computed: {
    contentlines() {
      return this.content.split("\n");
    },
    postId() {
      return this.$route.params.postId;
    }
  },

  mounted() {
    this.init();
  }
};
</script>

<style scoped>
.conta {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
.titl {
  font-weight: 400;
  font-size: 60px;
}
.container {
  width: 99%;
}
.content {
  margin-top: 8px;
}
</style>
