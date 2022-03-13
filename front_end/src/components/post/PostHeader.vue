<template>
  <div>
    <div>
      <v-app-bar color="cyan" dense dark>
        <v-icon class="ico" middle color="white">mdi-message-text</v-icon>
        <v-toolbar-title class="cursor">
          Community
        </v-toolbar-title>
      </v-app-bar>
    </div>
    <post-container class="container"></post-container>
  </div>
</template>

<script>
import { getUser } from "../../api/user";
import PostContainer from "./PostContainer";

export default {
  name: "PostHeader",

  data(){
    return {
      uname: ""
    }
  },

  components:{
    PostContainer
  },

  methods:{

    getUname(){
      const userId = window.localStorage.getItem("userId");
      getUser(userId).then(res => {
        this.uname = res.uname;
      });
    }
  },

  mounted() {
    this.getUname();
  }
}
</script>

<style scope>
.tex{
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.bt{
  display: block;
  width: 10%;
  margin-left: auto;
  margin-right: auto;
}
.toPOST{
  flex-direction:column;
  display: flex;
  justify-content: center;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
}

.container{
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}
.ico{
  margin:10px;
}


</style>
