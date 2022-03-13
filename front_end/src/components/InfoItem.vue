<template>
  <v-card
    class="ma-6 d-flex align-start flex-column"
    width="250px"
    height="360px"
    dark
    color="#1E3A4D"
  >
    <v-img height="100" :src="pic"> </v-img>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn color="#1A3FD6" @click="handleMore">
        learn more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "InfoItem",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    description: {
      type: String,
      default: "简介"
    },
    pic: {
      type: String,
      default: ""
    },
    path:{
      type: String,
      default: "/"
    }
  },
  data() {
    return {};
  },
  methods: {
    handleMore() {
      // alert("learn more!");
      this.$router.push(this.path)
    }
  }
};
</script>

<style scoped></style>
