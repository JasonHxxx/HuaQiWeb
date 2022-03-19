<template>
  <v-card style="width: 260px" class="mx-4">
    <div class="right d-flex align-baseline ma-3">
      <h3>推荐组合{{index+1}}</h3>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="addCombo">添加至自选</v-btn>
    </div>
    <div>
      <v-card class="ma-2" elevation="1">
        <v-list dense>
          <v-list-item>
            <v-list-item-content>Stock name</v-list-item-content>
            <v-list-item-content class="align-end">
              Stock rate
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-for="(item, i) in items" :key="i" class="my-2">
            <v-list-item-content>{{item.name}}</v-list-item-content>
            <v-list-item-content class="d-flex align-end justify-start">
              <span style="color: red">+{{ item.data }}
                <v-icon
                color="red">
                  mdi-arrow-up
                </v-icon>
              </span>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "RecommendItem",
  props: {
    index: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: new Array([{}, {}, {}])
    }
  },
  methods: {
    addCombo(){
      this.$emit("addCombo", [this.items[0].code,this.items[1].code,this.items[2].code],
      [this.items[0].name, this.items[1].name, this.items[2].name])
    }
  }
};
</script>

<style scoped></style>
