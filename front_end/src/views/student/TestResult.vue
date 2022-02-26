<template>
  <div>
    <v-sheet class="pa-4 mx-auto" max-width="800">
      <v-toolbar color="white" flat>
        <v-btn icon light small>
          <v-icon color="grey darken-2" large @click="back">
            mdi-arrow-left
          </v-icon>
        </v-btn>

        <v-toolbar-title class=" pa-2 text-h5 text--secondary">
          返回
        </v-toolbar-title>
      </v-toolbar>
    </v-sheet>
    <v-sheet class="pa-4 mx-auto" max-width="800">
      <v-spacer></v-spacer>
      <v-card class="pa-auto" color="grey lighten-3" outlined>
        <v-card-title>
          <p class="text-h4 text--secondary">
            {{testInfo.test_name}}</p>
          <v-spacer></v-spacer>
          <v-chip
              class="white--text"
              color="grey"
          >{{score}}

          </v-chip>
        </v-card-title>
        <v-card-text>
         <div class="text--secondary">
            开始时间：{{ testInfo.start }}<br>
            结束时间：{{ testInfo.end }}<br>
            共 {{len}} 小题<br>
            满分100分,你的得分是{{score}}
          </div>
        </v-card-text>
      </v-card>
    </v-sheet>
    <v-list class="py-4 mx-auto" max-width="800">
      <question-item
        v-for="(q, i) in questionList"
        :key="i"
        :id="i + 1"
        :detail="q.detail"
        :option-a="q.optionA"
        :option-b="q.optionB"
        :option-c="q.optionC"
        :option-d="q.optionD"
        :answer="q.answer"
        :resolution="q.resolution"
        :record="q.submit"
        :show-answer="T"
        :show-record="T"
      >
      </question-item>
    </v-list>
  </div>
</template>
<script>
import QuestionItem from "@/components/QuestionItem.vue";
import { getTestResult, getTestSimpleInfo} from "@/api/test";

export default {
  name: "TestResult",
  components: {
    QuestionItem
  },
  data() {
    return {
      T: true,
      F: false,
      testInfo: {},
      questionList: [],
      colorList: ["gray lighten-3", "gray lighten-1"],
      score: 0
    };
  },
  methods: {
    loadTest() {
      const { testId } = this.$route.params;
      const uid = window.localStorage.getItem("userId");
      getTestResult({ testId, uid }).then(res => {
        console.log(res);
        this.questionList = res.map(a => {
          return a.data;
        });
      });
    },
    loadInfo() {
      const { testId } = this.$route.params;
      getTestSimpleInfo(testId).then(res => {
        console.log(res);
        this.testInfo = res;
      });
      this.score = window.localStorage.getItem("score");
      console.log("score");
      console.log(this.score);
    },
    back() {
      window.localStorage.removeItem("score");
      this.$router.go(-1);
    }
  },

  mounted() {
    this.loadTest();
    this.loadInfo();
  },
  computed: {
    len: function() {
      return this.questionList.length;
    }
  }
};
</script>

<style scoped></style>
