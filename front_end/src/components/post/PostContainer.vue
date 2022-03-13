<template>
  <div>
    <div>
      <v-btn v-if="status === '0'" @click="changeStatus">点击按回复时间查看</v-btn>
      <v-btn v-else-if="status === '1'" @click="changeStatus">点击按回帖时间查看</v-btn>
    </div>
    <v-container fluid>
      <div v-for="post in posts" :key="post.postId">
        <v-card>
          <v-row class="ma-4">
            <post-item :post="post"></post-item>
          </v-row>
        </v-card>
      </div>
      <v-pagination
          v-model="currentPage"
          :length="totalPage"
          circle
          color="cyan"
      ></v-pagination>
    </v-container>
    <v-btn fab color="cyan" left absolute @click.stop="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
        v-model="dialog"
        max-width="800"
    >
      <v-card  width="800px">
        <div class="container">
          <add-posts></add-posts>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PostItem from "./PostItem";
import { getPostsByCourseOrderByPostTime, getPostsByCourseOrderByReplyTime } from "@/api/post";
import addPosts from "./addPosts";

export default {
  name: "PostContainer",
  components: {
    addPosts,
    PostItem
  },

  data() {
    return {
      posts: [],
      totalPage: 1,
      currentPage: 1,
      dialog:false,
      status: "0"  //status为0表示按发帖时间查看帖子 为1表示按回复时间查看帖子
    };
  },

  watch: {
    currentPage: {
      handler: function (val) {
        this.getPostsByCourse(val);
      }
    }
  },

  methods: {
    goToPOST() {
      const courseId = this.$route.params.courseId;
      this.$router.push(`/posts/create/${courseId}`);
    },
    getPostsByCourse(page) {
      this.posts = [{postId: 1, title: "ESG的重要性在哪里", time: "2021-06-01 21:56:03"}, {postId: 2, title: "ESG详细分析", time: "2021-06-01 21:56:03"}];
      if(this.status === "0") {
        getPostsByCourseOrderByPostTime(page, this.$route.params.courseId).then(
            res => {
              this.totalPage = res.pages;
              this.posts = res.list;
            }
        );
      }else{
        getPostsByCourseOrderByReplyTime(page, this.$route.params.courseId).then(
            res => {
              this.totalPage = res.pages;
              this.posts = res.list;
              console.log(this.posts);
            }
        );
      }
    },

    changeStatus(){
      console.log(this.status);
      if(this.status === "0"){
        this.status = "1";
      }else{
        this.status = "0";
      }
      this.getPostsByCourse(this.currentPage);
    }
  },

  created() {
    this.getPostsByCourse(1);
  }
};
</script>

<style scoped>

</style>
