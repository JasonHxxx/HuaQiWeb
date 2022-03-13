<template>
  <v-footer
      color="white"
      padless
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in links"
          :key="link.name"
          color="black"
          text
          rounded
          class="my-2"
          @click="handleMore(link.path)"
      >
        {{ link.name }}
      </v-btn>
      <v-col
          class="white py-4 text-center black--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Inno ESG</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name:"Footer",
  data: () => ({
    links: [
      {name:'Home',path:'/'},
      {name:'About Us',path:'/'},
      {name:'Contact us',path: '/'}
    ],
  }),
  methods: {
    handleMore(path) {
      alert("learn more!");
      this.$router.push(path);
    }
  }
}
</script>
