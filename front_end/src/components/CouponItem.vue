<template>
  <v-card width="380" class="ma-4 pa-2 blue lighten-2">
    <v-card-title class="headline white--text">
      {{ name }}
      <v-chip small class="ml-4">
        {{ type }}
      </v-chip>
    </v-card-title>

    <v-card-text class="white--text">
      <v-row class="pa-2 pl-4"> 优惠ID: {{ id }} </v-row>
      <v-row class="pa-2 pl-4"> 优惠描述: {{ text }} </v-row>
      <v-row class="pa-2 pl-4"> 开始时间: {{ startTime }} </v-row>
      <v-row class="pa-2 pl-4"> 结束时间: {{ endTime }} </v-row>
      <v-row class="pa-2 pl-4"> 详细策略: {{ info }} </v-row>
      <v-row class="pa-2 pl-4">
        是否可与其他优惠同用: {{ sharable ? "是" : "否" }}
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn  class="white--text" text @click="handleDeliver">发放优惠券</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CouponItem",
  props: {
    id: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ""
    },
    scope: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    metadata: {
      type: String,
      default: ""
    },
    startTime: {
      type: String,
      default: ""
    },
    endTime: {
      type: String,
      default: ""
    },
    valid: {
      type: Boolean,
      default: false
    },
    sharable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleDeliver: function() {
      this.$emit("deliver-coupon", this.id);
    }
  },
  computed: {
    text: function() {
      return this.description.length < 60
          ? this.description
          : this.description.substring(0, 60) + "...";
    },
    info: function() {
      //{"threshold":0,"cutDown":0,"discount":0,"courseId":"","teacherId":"","schoolId":""}
      let strategy = JSON.parse(this.metadata);
      let res = "";
      if (this.strategy === "减价型") {
        res += "满" + strategy["threshold"] + "减" + strategy["cutDown"] + "  ";
      } else {
        res += strategy["discount"] * 10 + "折  ";
      }
      // "SINGLE", "TEACHER", "SCHOOL", "COMMON"
      if (this.scope === "单一课程") {
        res += "适用于课程" + strategy["courseId"];
      }
      if (this.scope === "指定教师的课程") {
        res += "适用于教师" + strategy["teacherId"] + "的课程";
      }
      if (this.scope === "全站课程通用") {
        res += "适用于全部";
      }
      if (this.scope === "指定学校的课程") {
        res += "适用于学校" + strategy["schoolId"];
      }
      return res.length < 60 ? res : res.substring(0, 60) + "...";
    }
  }
});
</script>

<style scoped>
.text {
  min-height: 85px;
  overflow: hidden;
}
</style>
