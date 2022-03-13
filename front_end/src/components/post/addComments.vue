<!--发表评论的组件-->
<template>
  <div>
    <v-alert
      class="alert"
      outlined
      type="success"
      text
      v-show="showSuccessDialog"
      transition="scroll-y-transition"
    >
      评论成功！
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

    <div>
      <v-textarea v-model="comment" label="请输入您的回复"></v-textarea>
      <v-btn @click="submit(postId, comment)">发表</v-btn>
    </div>
  </div>
</template>

<script>
import { addComment } from "../../api/post";

export default {
  name: "addComments",

  data() {
    return {
      comment: "",
      showSuccessDialog: false,
      showFailDialog: false,
      msg: ""
    };
  },

  props: ["postId"],

  methods: {
    submit(postId, comment) {
      let info = {
        postId: postId,
        comment: comment,
        userId: window.localStorage.getItem("userId")
      }; //这边评论的id不需要我传到后端，因为是新发表一个评论，后端自增就行
      console.log(info);
      addComment(info).then(res => {
        if (res.code === 1) {
          this.showSuccessDialog = true;
          setTimeout(() => {
            this.showSuccessDialog = false;
          }, 1000);
          this.comment = "";
        } else {
          this.showFailDialog = true;
          this.msg = res.msg;
          setTimeout(() => {
            this.showFailDialog = false;
          }, 1000);
        }
        this.$router.go(0);
      });
    }
  }
};
</script>

<style scoped></style>
