<template>
  <v-card
      class="mx-auto"
      color="#26c6da"
      dark
      width="400"
      height="500"
  >
    <v-card-title>
      <v-icon
          large
          left
      >
        {{kind}}
      </v-icon>
      <span class="title font-weight-light">{{kindDes}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{description}}
    </v-card-text>


  </v-card>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: "简介"
    },
    kind: {
      type: String,
      default: "类型"
    },
    kindDes: {
      type: String,
      default: "类型"
    }
  },
  data: () => ({
    //
  })
}
</script>


<style scoped></style>

