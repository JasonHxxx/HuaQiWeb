<template>
  <div>
    <!-- alert -->
    <v-alert
        class="alert"
        outlined
        type="success"
        text
        v-show="showSuccessDialog"
        transition="scroll-y-transition"
    >
      题目创建成功！
    </v-alert>
    <!-- alert -->
    <v-alert
      class="alert"
      outlined
      type="warning"
      text
      v-show="showFailDialog"
      transition="scroll-y-transition"
    >
      {{ msg }}
    </v-alert>
    <v-container class="pl-16 pr-16">
      <form class="pa-8 grey lighten-5 mt-8">
        <p class="text-right">
          <v-icon color="grey darken-2 my-0" large @click="back">
            mdi-close
          </v-icon>
        </p>
        <v-select
          :items="courseList"
          v-model="courseName"
          label="所属课程">
        </v-select>
        <v-textarea v-model="questionInfo.detail" label="题干"></v-textarea>
        <v-text-field
          v-model="questionInfo.optionA"
          label="A选项"
        ></v-text-field>
        <v-text-field
          v-model="questionInfo.optionB"
          label="B选项"
        ></v-text-field>
        <v-text-field
          v-model="questionInfo.optionC"
          label="C选项"
        ></v-text-field>
        <v-text-field
          v-model="questionInfo.optionD"
          label="D选项"
        ></v-text-field>
        <v-select
          :items="optionList"
          v-model="questionInfo.answer"
          label="答案"
        >
        </v-select>
        <v-textarea v-model="questionInfo.resolution" label="解析"></v-textarea>

        <v-btn class="ml-0 mt-8 info" @click="submit">
          确认
        </v-btn>
      </form>
    </v-container>

    <!-- 提示对话框 -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title> </v-card-title>
        <v-card-text>
          确认提交题目？
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            确认
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {getTeacherCourses} from "@/api/course";
import {createQuestion} from "@/api/question";

export default {
  name: "QuestionCreate",

  data() {
    return {
      questionInfo: {
        courseId: 0,
        detail: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
        resolution: ""
      },
      courseName: "",
      dialog: false,
      showSuccessDialog: false,
      showFailDialog: false,
      msg: "",
      courseList: [],
      courseIdList: [],
      optionList: ["A", "B", "C", "D"]
    };
  },

  methods: {
    submit() {
      const uid = window.localStorage.getItem("userId");
      const payload = {
        ...this.questionInfo,
        courseId: this.courseIdList[this.courseList.indexOf(this.courseName)],
        teacherId: uid,
      };
      console.log(payload);
      createQuestion(payload).then(res => {
        console.log(res);
        if (res.code === 1) {
          this.showSuccessDialog = true;
          setTimeout(() => {
            this.showSuccessDialog = false;
          }, 1000);
        } else {
          this.showFailDialog = true;
          this.msg = res.msg;
          setTimeout(() => {
            this.showFailDialog = false;
          }, 1000);
        }
      });
    },
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    const uid = window.localStorage.getItem("userId");
    if (uid) {
      getTeacherCourses(uid).then(res => {
        console.log(res);
        if (res === []){
          this.courseList = [];
          return;
        }
        this.courseIdList = res.map(a => {
          return a.id;
        });
        this.courseList = res.map(a => {
          return a.name;
        });
        console.log(this.courseIdList);
        console.log(this.courseList);
      });
    }
  }
};
</script>

