<template>
  <div>
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-card-title>题目详情</v-card-title>
        <question-item
            :id="0"
            :detail="currentQuestion.detail"
            :option-a="currentQuestion.optionA"
            :option-b="currentQuestion.optionB"
            :option-c="currentQuestion.optionC"
            :option-d="currentQuestion.optionD"
            :answer="currentQuestion.answer"
            :resolution="currentQuestion.resolution"
            :show-answer="T"
            :show-record="F"
        >
        </question-item>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-sheet class="ma-8 pa-4" max-width="1200">
      <v-toolbar color="white" flat>
        <v-btn icon light medium>
          <v-icon color="grey darken-2" large @click="back">
            mdi-arrow-left
          </v-icon>
        </v-btn>

        <v-toolbar-title class=" pa-2 text-h4 text--darken-4 font-weight-black">
          我的题库
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <router-link :to="`/teacher/question/create`">
          <v-btn class="pa-3 " fab dark color="indigo">
            <v-icon dark light medium>
              mdi-plus
            </v-icon>
          </v-btn>
        </router-link>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-card max-width="1200" class="ma-auto">
        <question-simple-item
            v-for="(q, i) in questions"
            :key="q.id"
            :question-id="q.id"
            :course-id="q.courseId"
            :detail="q.detail"
            :index="i"
            @handle-peek="showDialog(q.id)"
        >
        </question-simple-item>
        <!--        <div class="text-center">-->
        <!--          <v-container>-->
        <!--            <v-row justify="center">-->
        <!--              <v-col cols="5">-->
        <!--                <v-container class="max-width">-->
        <!--&lt;!&ndash;                  <v-pagination&ndash;&gt;-->
        <!--&lt;!&ndash;                    v-model="page"&ndash;&gt;-->
        <!--&lt;!&ndash;                    class="mb-sm-10"&ndash;&gt;-->
        <!--&lt;!&ndash;                    :length="total"&ndash;&gt;-->
        <!--&lt;!&ndash;                  ></v-pagination>&ndash;&gt;-->
        <!--&lt;!&ndash;                </v-container>&ndash;&gt;-->
        <!--              </v-col>-->
        <!--            </v-row>-->
        <!--          </v-container>-->
        <!--        </div>-->
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
import QuestionSimpleItem from "@/components/QuestionSimpleItem";
import { getQuestionById, getAllQuestion } from "@/api/question";
import QuestionItem from "@/components/QuestionItem";

export default {
  name: "questionList",
  components: { QuestionItem, QuestionSimpleItem },
  data() {
    return {
      dialog: false,
      T: true,
      F: false,
      currentPage: 1,
      currentQuestion: {},
      totalPage: 6,
      questions: []
    };
  },

  methods: {
    // handleGetQuestionByPage(val) {
    //   const uid = window.localStorage.getItem("userId");
    //   getTeacherQuestions({ val, uid }).then(res => {
    //     this.totalPage = res.pages;
    //     this.questionList = res.list;
    //   })
    // },
    loadQuestion() {
      getAllQuestion().then(res => {
        console.log(res);
        this.questions = res;
      });
    },

    back() {
      this.$router.push(`/teacher`);
    },
    showDialog(questionId) {
      console.log(questionId);
      getQuestionById(questionId).then(res => {
        console.log(res.data);
        this.currentQuestion = res.data;
      });
      this.dialog = true;
    }
  },
  mounted() {
    const uid = window.localStorage.getItem("userId");
    if (uid) {
      this.loadQuestion();
    }
  }
};
</script>
