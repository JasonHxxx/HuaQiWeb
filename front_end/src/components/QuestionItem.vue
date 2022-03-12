<template>
  <v-card grey class="mx-4">
    <v-card-text class="text--primary text-darken-1" max-width="800">
      {{ id }}.{{ detail }}
      <v-container class="px-0" fluid>
        <v-radio-group v-model="record" v-if="showAnswer" disabled>
          <v-radio value="A" :label="oA"></v-radio>
          <v-radio value="B" :label="oB"></v-radio>
          <v-radio value="C" :label="oC"></v-radio>
          <v-radio value="D" :label="oD"></v-radio>
        </v-radio-group>
        <v-radio-group
            v-else
            v-model="record"
        >
          <v-radio value="A" :label="oA"></v-radio>
          <v-radio value="B" :label="oB"></v-radio>
          <v-radio value="C" :label="oC"></v-radio>
          <v-radio value="D" :label="oD"></v-radio>
        </v-radio-group>
      </v-container>
      <v-sheet class="mx-0" v-if="showAnswer && !showRecord">
        <p>答案：{{ answer }}</p>
        <p>解析：{{ resolution }}</p>
      </v-sheet>
      <v-sheet  v-if="showAnswer && showRecord">
        {{ record }}
        <v-icon v-if="ifRight" color="success">mdi-check</v-icon>
        <v-icon v-else color="red">mdi-close</v-icon>
        <br/>
        答案：{{ answer }}<br/>
        解析：{{ resolution }}
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "QuestionItem",
  props: {
    questionId: {
      type: Number,
      default: 0
    },
    detail: {
      type: String,
      default: "题干"
    },
    optionA: {
      type: String,
      default: "选项A"
    },
    optionB: {
      type: String,
      default: "选项B"
    },
    optionC: {
      type: String,
      default: "选项C"
    },
    optionD: {
      type: String,
      default: "选项D"
    },
    answer: {
      type: String,
      default: "无"
    },
    resolution: {
      type: String,
      default: "无"
    },
    id: {
      type: Number,
      default: -1
    },
    record: {
      type: String,
      default: "无"
    },
    showAnswer: {
      type: Boolean,
      default: false
    },
    showRecord: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ifRight: function() {
      if (this.record == this.answer) {
        return 1;
      } else {
        return 0;
      }
    },
    oA: function() {
      return "A. " + this.optionA;
    },
    oB: function() {
      return "B. " + this.optionB;
    },
    oC: function() {
      return "C. " + this.optionC;
    },
    oD: function() {
      return "D. " + this.optionD;
    }
  },

});
</script>
