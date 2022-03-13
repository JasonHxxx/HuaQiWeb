<!--单独的一个帖子发布界面，一点击父组件的按钮就跳转到这个界面-->
<template>
  <div>
    <div class="container">
      <v-icon large>mdi-lead-pencil</v-icon>
    <span class="title">发布帖子</span></div>
    <v-alert
      class="alert"
      outlined
      type="success"
      text
      v-show="showSuccessDialog"
      transition="scroll-y-transition"
    >
      帖子创建成功！
    </v-alert>
    <!-- alert -->
    <v-alert
      class="alert"
      outlined
      type="warning"
      text
      v-show="showFailDialog"
      transition="scroll-y-transition"
    >
      {{ msg }}
    </v-alert>

    <v-container class="pl-16 pr-16">
      <form class="pa-12 grey lighten-5 mt-8">
        <v-text-field v-model="form.title" label="标题"></v-text-field>
        <v-textarea v-model="form.content" label="内容"></v-textarea>
        <v-btn class="ml-0 mt-8 info" @click="submit(form.title, form.content)">
          发布
        </v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
import { addPosts } from "../../api/post";
export default {
  name: "addPosts",

  data() {
    return {
      form: {
        title: "",
        content: ""
      },
      showSuccessDialog: false,
      showFailDialog: false,
      msg: ""
    };
  },

  methods: {
    submit(title, content) {
      let info = {
        title: title,
        content: content,
        userId: window.localStorage.getItem("userId"),
        courseId: this.$route.params.courseId
      };
      addPosts(info).then(res => {
        if (res.code === 1) {
          this.showSuccessDialog = true;
          setTimeout(() => {
            this.showSuccessDialog = false;
            this.$router.go(0);
          }, 1000);
          // this.form = {}  //todo
        } else {
          this.showFailDialog = true;
          this.msg = res.msg;
          setTimeout(() => {
            this.showFailDialog = false;
          }, 1000);
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
