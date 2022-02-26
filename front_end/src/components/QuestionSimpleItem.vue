<template>
  <v-card
      color="white"
      grey
      class="ma-3"
  >
    <v-card-title class="grey--text text-darken-1">
      编号: {{ questionId }}
      <v-spacer></v-spacer>
      <v-chip class="ma-1" color="green" text-color="white">
        {{ courseName }}
      </v-chip>
    </v-card-title>
    <v-card-text>
      {{ text }}
    </v-card-text>
    <v-card-actions>
      <v-btn text  @click="handlePeek" color="green" text-color="white"
      >浏览题目</v-btn
      >
      <v-btn text @click="handleEdit" color="green" text-color="white"
      >编辑题目</v-btn
      >
      <v-btn text @click="handleDelete" color="green" text-color="white"
      >删除题目</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { getCourseById } from "@/api/course";

export default Vue.extend({
  // name: "CourseItem",
  name: "QuestionItem",
  props: {
    questionId:{
      type: Number,
      default: 0
    },
    index:{
      type: Number,
      default: 0
    },
    courseId: {
      type: Number,
      default: 0
    },
    courseName: {
      type: String,
      default: "course"
    },
    detail: {
      type: String,
      default: "题干"
    },
  },
  data() {
    return {
      chip: ["免费", "已购"],
      chipColor: ["success", "primary"]
    };
  },
  methods: {
    handleDelete() {
      console.log("Delete");
    },
    handlePeek() {
      this.$emit("handle-peek", this.index);
    },
    handleEdit() {
      console.log("Edit");
    },
    getCourseName() {
      const uid = 1;
      const courseId = this.courseId;
      getCourseById({ courseId,uid }).then(res => {
        this.courseName = res.name;
      })
    }
  },
  computed: {
    text: function() {
      return this.detail.length < 60
          ? this.detail
          : this.detail.substring(0, 60) + "...";
    },
  },
  mounted() {
    this.getCourseName();
  }
});
</script>

