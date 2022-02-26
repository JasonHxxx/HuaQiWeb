<template>
  <div>

    <v-row>
      <v-btn icon light small class="ml-6 mt-10">
        <v-icon color="grey darken-2" large @click="back">
          mdi-arrow-left
        </v-icon>
      </v-btn>
      <v-col>
        <!-- 测试信息 -->
        <v-container class="ml-12 mr-6 mt-8">
          <form class="pa-12 grey lighten-5">
            <p class="text-h4 text--secondary">
              测试信息
            </p>
            <v-text-field
              v-model="testInfo.test_name"
              label="测试名称"
            ></v-text-field>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="testInfo.start"
                  label="开始时间"
                  messages="YYYY-MM-DD HH:MM:SS"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="testInfo.end"
                  label="截止时间"
                  messages="YYYY-MM-DD HH:MM:SS"
                ></v-text-field>
              </v-col>
            </v-row>
          </form>
          <v-spacer></v-spacer>
          <!-- 测试列表 -->
          <v-card class="pa-0 my-8" max-width="600">
            <v-toolbar color="cyan lighten-2" dark>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>可选题目</v-toolbar-title>
            </v-toolbar>

            <v-list two-line subheader class="pa-auto">
              <v-list-item-group
                v-model="secelted"
                active-class="cyan--text"
                multiple
              >
                <template v-for="(item, index) in questionList">
                  <v-list-item :key="index">
                    <template v-slot:default="{ active }">
                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          color="cyan lighten-2"
                          class="pb-0"
                        ></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.detail"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                  <v-divider
                    v-if="index < questionList.length - 1"
                    :key="-index-1"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-container>
      </v-col>
      <!-- 测试预览 -->
      <v-col>
        <v-card class=" my-11 mr-16 ml-6">

          <v-toolbar color="cyan lighten-2" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>测试预览</v-toolbar-title>
          </v-toolbar>
          <v-list class="py-4 pa-auto my-8">
            <question-item
              v-for="(s, i) in secelted"
              :key="i"
              :id="i + 1"
              :detail="questionList[s].detail"
              :option-a="questionList[s].optionA"
              :option-b="questionList[s].optionB"
              :option-c="questionList[s].optionC"
              :option-d="questionList[s].optionD"
              :show-detail="F"
              :show-record="F"
            >
            </question-item>
          </v-list>
          <v-spacer></v-spacer>
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
              测试创建成功！
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
          </div>
          <v-container text-center>
            <v-btn class="info align-self-center" @click="submit">
              确认
            </v-btn>
          </v-container>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import QuestionItem from "@/components/QuestionItem.vue";
import { getCourseQuestion } from "@/api/question";
import { createTest } from "@/api/test";

export default {
  name: "TestCreate",
  components: {
    QuestionItem
  },

  data() {
    return {
      msg: "",
      T: true,
      F: false,
      courseId: 0,
      showSuccessDialog: false,
      showFailDialog: false,
      testInfo: {
        test_name: "",
        start: "",
        end: "",
        q1_id: 0,
        q2_id: 0,
        q3_id: 0,
        q4_id: 0,
        q5_id: 0
      },
      secelted: [],
      questionList: []
    };
  },

  methods: {
    submit() {
      this.testInfo.q1_id =
        this.secelted.length > 0 ? this.questionList[this.secelted[0]].id : -1;
      this.testInfo.q2_id =
        this.secelted.length > 1 ? this.questionList[this.secelted[1]].id : -1;
      this.testInfo.q3_id =
        this.secelted.length > 2 ? this.questionList[this.secelted[2]].id : -1;
      this.testInfo.q4_id =
        this.secelted.length > 3 ? this.questionList[this.secelted[3]].id : -1;
      this.testInfo.q5_id =
        this.secelted.length > 4 ? this.questionList[this.secelted[4]].id : -1;
      const { courseId } = this.$route.params;
      const payload = {
        ...this.testInfo,
        course_id: parseInt(courseId)
      };
      createTest(payload).then(res => {
        this.msg = res.msg;
        console.log(res);
        if (res.code === 1) {
          console.log("success");
          this.showSuccessDialog = true;
          // setTimeout(() => {
          //   this.showSuccessDialog = false;
          // }, 1000);
        } else {
          this.showFailDialog = true;
          this.msg = res.msg;
          setTimeout(() => {
            this.showFailDialog = false;
          }, 1000);
        }
      });
    },
    loadQuestions() {
      const { courseId } = this.$route.params;
      getCourseQuestion(parseInt(courseId)).then(res => {
        this.questionList = res;
      });
    },
    back() {
      this.$router.go(-1);
    }
  },

  mounted() {
    const { courseId } = this.$route.params;
    console.log(courseId);
    this.loadQuestions();
  }
};
</script>
