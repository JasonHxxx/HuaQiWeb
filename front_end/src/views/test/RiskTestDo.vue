<template>
  <div id="bg">
    <v-sheet class="pa-4 mx-auto" max-width="800">
      <v-btn icon light small class="ms-4">
        <v-icon color="grey darken-2" large @click="back">
          mdi-arrow-left
        </v-icon>
        <span class="text-h6">返回</span>
      </v-btn>
    </v-sheet>
    <v-sheet class="pa-4 mx-auto" max-width="800">
      <v-spacer></v-spacer>
      <v-sheet class="pa-auto" color="grey lighten-3">
        <v-card-text>
          <p class="text-h4 text--secondary d-flex justify-center">
            {{ testInfo.test_name }}
          </p>
          <div class="text--primary">
            <p>{{ testInfo.test_detail }}</p>
            <p>{{ testInfo.result }}</p>
          </div>
        </v-card-text>
      </v-sheet>
    </v-sheet>
    <v-list class="mx-auto" max-width="800">
      <div v-for="q in questions" :key="q.qid" grey>
        <v-card-text class="question_detail text-darken-1" max-width="800">
          {{ q.qid }} .({{ q.percent }}%){{ q.detail }}
          <v-container class="ms-0">
            <v-radio-group v-model="q.record" row>
              <v-radio
                :value="q.valueA || '1'"
                :label="'A.' + q.optionA"
              ></v-radio>
              <v-radio
                :value="q.valueB || '2'"
                :label="'B.' + q.optionB"
              ></v-radio>
              <v-radio
                :value="q.valueC || '3'"
                :label="'C.' + q.optionC"
              ></v-radio>
              <v-radio
                v-if="q.optionD"
                :value="q.valueD || '4'"
                :label="'D.' + q.optionD"
              ></v-radio>
            </v-radio-group>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
      </div>
    </v-list>
    <v-alert
      class="alert"
      type="success"
      v-show="showSuccessDialog"
      transition="scroll-y-transition"
    >
      提交成功！
    </v-alert>
    <!-- alert -->
    <v-alert
      class="alert"
      type="warning"
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
export default {
  name: "RiskTestDo",
  data() {
    return {
      T: true,
      F: false,
      questions: [
        {
          qid: 1,
          detail: "您的年龄介于",
          optionA: "18—30岁",
          valueA: 3,
          optionB: "31—50岁",
          valueB: 4,
          optionC: "50—65岁",
          valueC: 2,
          optionD: "高于65岁",
          valueD: 1,
          record: 0,
          percent: 4
        },
        {
          qid: 9,
          percent: 5,
          detail: "您的投资目的是",
          optionA: "资产保值",
          valueA: 1,
          optionB: "资产稳步增长",
          valueB: 2.5,
          optionC: "资产迅速增长",
          valueC: 4
        },

      ],
      testInfo: {
        test_name: "投资者风险偏好和承受能力测评",
        test_len: 14,
        test_detail: "算法根据用户选项加权赋值，将投资者分为四类：",
        test_result: "保守型，稳健型，成长型，进取型。"
      },
      msg: "",
      showSuccessDialog: false,
      showFailDialog: false,
      colorList: ["gray lighten-3", "gray lighten-1"]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getSum() {
      let qlist = this.questions;
      let sum = 0;
      for (let i in qlist) {
        sum += parseInt(qlist[i].percent) * parseFloat(qlist[i].record);
      }
      return sum * 0.01;
    },
    submit() {
      let flag = true;
      let score = this.getSum();
      console.log(score);
      window.localStorage.setItem("score", score);
      window.localStorage.setItem("done2", true);
      if (flag) {
        this.showSuccessDialog = true;
        setTimeout(() => {
          this.showSuccessDialog = false;
        }, 1000);
      }
    },
    getRecord(payload) {
      console.log(payload);
    }
  },

  mounted() {}
  //
  // computed: {
  //
  // }
};
</script>

<style scoped>
.question_detail {
  font-size: 16px;
}
#bg{
  background-image: url("https://gitee.com/huyuework/image/raw/master/2022/yana-gorbunova-Pl1O6qwe14M-unsplash.jpg");
}
</style>
