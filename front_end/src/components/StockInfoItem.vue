<template>
  <v-card color="#385F73" dark style="width: calc(90vw)">
    <v-card-title>{{name}}</v-card-title>
    <div class="d-flex justify-start" >
      <v-col
      :md="3">
        <v-row>
          <div class="ma-2">今开</div>
          <div class="my-2">{{ open }}</div>
        </v-row>
        <v-row>
          <span class="ma-2">昨收</span>
          <span class="my-2">{{ close }}</span>
        </v-row>
      </v-col>
      <v-col
          :md="3">
        <v-row>
          <span class="ma-2">最高</span>
          <span class="my-2">{{ high }}</span>
        </v-row>
        <v-row>
          <span class="ma-2">最低</span>
          <span class="my-2">{{ low }}</span>
        </v-row>
      </v-col>
      <v-col :md="3">
        <v-row>
          <span class="ma-2">交易量</span>
          <span class="my-2">{{ volumn }}</span>
        </v-row>
        <v-row>
          <span class="ma-2">交易额</span>
          <span class="my-2">{{ money }}</span>
        </v-row>
      </v-col>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "StockInfoItem",
  props: {
    open: {
      type: [String, Number],
      default: "3271.89"
    },
    close: {
      type: [String, Number],
      default: "3309.75"
    },
    low: {
      type: [String, Number],
      default: "3223.53"
    },
    high: {
      type: [String, Number],
      default: "3297.80"
    },
    volumn: {
      type: [String, Number],
      default: "3.38亿手"
    },
    money: {
      type: [String, Number],
      default: "4180.56亿"
    },
    name: {
      type: String,
      default: ""
    },
  }
};
</script>

<style scoped>
.title {
  padding-right: 10px;
  margin-left: 20px;
}
.content {
  font-size: 16px;
  margin-bottom: 0px;
}
</style>
