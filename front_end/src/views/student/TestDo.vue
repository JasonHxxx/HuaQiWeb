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
      <v-sheet class="pa-auto" color="grey lighten-3">
        <v-card-text>
          <p class="text-h4 text--secondary">
            {{ testInfo.test_name }}
          </p>
          <div class="text--secondary">
            开始时间：{{ testInfo.start }}<br />
            结束时间：{{ testInfo.end }}<br />
            共 {{ len }} 小题<br />
            满分100分
          </div>
        </v-card-text>
      </v-sheet>
    </v-sheet>
    <v-list class="py-4 mx-auto" max-width="800">
      <v-card
        v-for="(q, i) in questionList"
        :key="q.questionId"
        grey
        class="mx-4"
      >
        <v-card-text class="text--primary text-darken-1" max-width="800">
          {{i+1}} .{{ q.detail }}
          <v-container class="px-0" fluid>
            <v-radio-group v-model="q.record">
              <v-radio value="A" :label="'A.' + q.optionA"></v-radio>
              <v-radio value="B" :label="'B.' + q.optionB"></v-radio>
              <v-radio value="C" :label="'C.' + q.optionC"></v-radio>
              <v-radio value="D" :label="'D.' + q.optionD"></v-radio>
            </v-radio-group>
          </v-container>
        </v-card-text>
      </v-card>
    </v-list>
    <v-alert
      class="alert"
      outlined
      type="success"
      text
      v-show="showSuccessDialog"
      transition="scroll-y-transition"
    >
      提交成功！
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
    <v-container text-center>
      <v-btn class="info align-self-center" @click="submit">
        确认提交
      </v-btn>
    </v-container>
  </div>
</template>
<script>
import { getTestDO, getTestSimpleInfo } from "@/api/test";
import { submit } from "@/api/submit";

export default {
  name: "TestDo",
  data() {
    return {
      T: true,
      F: false,
      questionList: [],
      testInfo: {},
      msg: "",
      showSuccessDialog: false,
      showFailDialog: false,
      // testInfo: {
      //   id: 34,
      //   name: "需求测试",
      //   start: "2021-06-17 18:00:00",
      //   end: "2021-08-17 18:00:00",
      //   status: 2,
      //   done: false,
      // questionList: [
      //   {
      //     id: 1,
      //     detail: "说明下列需求属于哪种类型：系统需要存储1年内的销售记录。",
      //     courseName: "软工一",
      //     optionA: "功能需求",
      //     optionB: "非功能需求",
      //     optionC: "性能需求",
      //     optionD: "质量需求",
      //     answer: "C",
      //     solution: "dsgsfhb",
      //     record: ""
      //   },
      //   {
      //     id: 2,
      //     detail: "说明下列需求属于哪种类型：系统需要存储1年内的销售记录。",
      //     courseName: "软工一",
      //     optionA: "功能需求",
      //     optionB: "非功能需求",
      //     optionC: "性能需求",
      //     optionD: "质量需求",
      //     answer: "A",
      //     solution: "略",
      //     record: ""
      //   },
      //   {
      //     id: 3,
      //     detail: "说明下列需求属于哪种类型：系统需要存储1年内的销售记录。",
      //     courseName: "软工一",
      //     optionA: "功能需求",
      //     optionB: "非功能需求",
      //     optionC: "性能需求",
      //     optionD: "质量需求",
      //     answer: "D",
      //     solution: "略",
      //     record: ""
      //   },
      //   {
      //     id: 4,
      //     detail: "说明下列需求属于哪种类型：系统需要存储1年内的销售记录。",
      //     courseName: "软工一",
      //     optionA: "功能需求",
      //     optionB: "非功能需求",
      //     optionC: "性能需求",
      //     optionD: "质量需求",
      //     answer: "A",
      //     solution: "略",
      //     record: ""
      //   },
      //   {
      //     id: 5,
      //     detail: "说明下列需求属于哪种类型：系统需要存储1年内的销售记录。",
      //     courseName: "软工一",
      //     optionA: "功能需求",
      //     optionB: "非功能需求",
      //     optionC: "性能需求",
      //     optionD: "质量需求",
      //     answer: "A",
      //     solution: "略",
      //     record: ""
      //   }
      // ]
      colorList: ["gray lighten-3", "gray lighten-1"]
    };
  },
  methods: {
    loadTest() {
      const { testId } = this.$route.params;
      getTestDO(testId).then(res => {
        console.log(res);
        this.questionList = res.map(a => {
          a.data.record = "E";
          return a.data;
        });
        console.log(this.questionList);
      });
    },
    loadInfo() {
      const { testId } = this.$route.params;
      getTestSimpleInfo(testId).then(res => {
        // console.log(res);
        this.testInfo = res;
      });
    },
    back() {
      this.$router.go(-1);
    },
    submit() {
      let flag = true;
      let x = this.questionList.length;
      console.log(x);
      const tid = this.testInfo.id;
      const userId = parseInt(window.localStorage.getItem("userId"));
      for (let i = 0; i < x; i++) {
        let submitInfo = {
          uid: userId,
          tid: tid,
          qid: this.questionList[i].id,
          ans: this.questionList[i].record
        };
        const payload = {
          ...submitInfo
        };
        console.log(payload);
        submit(payload).then(res => {
          flag = res.code === 1 && flag;
          if (res.code !== 1) {
            this.showFailDialog = true;
            this.msg = res.msg;
            setTimeout(() => {
              this.showFailDialog = false;
            }, 1000);
          }
        });
      }
      if (flag) {
        this.showSuccessDialog = true;
        setTimeout(() => {
          this.showSuccessDialog = false;
        }, 1000);
      }

      // this.submitInfo = [
      //   {
      //     uid: userId,
      //     test_id: tid,
      //     qid: qList.length > 0 ? qList[1].id: -1,
      //     submit: this.submitList[0]
      //   },
      //   {
      //     uid: userId,
      //     test_id: tid,
      //     qid: qList.length > 1 ? qList[1].id: -1,
      //     submit: qList[1].record
      //   },
      //   {
      //     uid: userId,
      //     test_id: tid,
      //     qid: qList.length > 2 ? qList[2].id: -1,
      //     submit: qList[2].record
      //   },
      //   {
      //
      //   },
      //   { uid: userId, test_id: tid, qid: qList[4].id, submit: qList[4].record }
      // ];
      // const payload = {
      //   ...this.submitInfo
      // };
    },
    getRecord(payload) {
      console.log(payload);
      // this.questionList[payload[0]].record = payload[1];
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
