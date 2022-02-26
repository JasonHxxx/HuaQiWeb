<template>
  <div>
    <v-app-bar color="#EEEEEE" dense dark extended extension-height="100">
      <v-app-bar-nav-icon @click="direct('/')">
        <v-img
            lazy-src="../assets/logo.png"
            max-height="50"
            max-width="50"
            src="../assets/logo.png"
        ></v-img>
      </v-app-bar-nav-icon>

      <v-app-bar-title  @click="direct('/')" c class="cursor">ESG</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn text color="#424242" @click="direct('/login')">
        登录/注册
      </v-btn>
    </v-app-bar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
  methods: {
    direct(link) {
      if (this.$route.path !== link) {
        this.$router.push(link);
      }
    }
  }
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
  color: black;/*改变esg字体的颜色*/
}
</style>
