<template>
  <v-card
      class="mx-auto"
      :color="cardColor"
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
      <v-spacer></v-spacer>
      <v-icon
          right
      >
        {{ rate }}分
      </v-icon>
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
    rate: {
      type: [String,Number],
      default: "暂未评"
    },
    kind: {
      type: String,
      default: "类型"
    },
    kindDes: {
      type: String,
      default: "类型"
    },
    cardColor: {
      type: String,
      default: "#26c6da"
    }
  },
  data: () => ({
    //
  })
}
</script>

<style scoped></style>

