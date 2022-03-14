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
          qid: 2,
          detail: "您的学历",
          optionA: "18—30岁",
          optionB: "31—50岁",
          optionC: "50—65岁",
          optionD: "高于65岁",
          record: 0,
          percent: 8
        },
        {
          qid: 3,
          detail: "您的职业为",
          optionA: "无固定职业",
          optionB: "专业技术人员",
          optionC: "一般企事业单位员工",
          optionD: "金融行业从业人员",
          record: 0,
          percent: 11
        },
        {
          qid: 4,
          detail: "您的家庭可支配年收入为（折合成人民币）",
          optionA: "50万元以下",
          optionB: "50—100万元",
          optionC: "100—500万元",
          optionD: "500万元以上",
          record: 0,
          percent: 9
        },
        {
          qid: 5,
          detail: "在您每年的家庭可支配收入中，可用于金融投资（储蓄存款除外）的比例为",
          optionA: "小于10%",
          optionB: "10%—20%",
          optionC: "25%—50%",
          optionD: "50%以上",
          record: 0,
          percent: 7
        },
        {
          qid: 6,
          detail: "您的投资知识可描述为",
          optionA: "有限：基本没有金融产品方面的知识",
          valueA: 1,
          optionB: "一般：对金融产品及其相关风险具有基本的知识和理解",
          valueB: 2.5,
          optionC: "丰富：对金融产品及其相关风险具有丰富的知识和理解 ",
          valueC: 4,
          record: 0,
          percent: 10
        },
        {
          qid: 7,
          detail: "您的投资经验可描述为",
          optionA: "除银行储蓄外，基本没有其它投资经验",
          optionB: "购买过债券、保险等理财产品",
          optionC: "参与过股票、基金等产品的交易",
          optionD: "参与过期货、期权等产品的交易",
          record: 0,
          percent: 8
        },
        {
          qid: 8,
          detail: "您有多少年投资基金、股票、信托、私募证券或金融衍生品等风险投资品的经验",
          optionA: "少于2年",
          optionB: "2-5年",
          optionC: "5-10年",
          optionD: "10年以上",
          record: 0,
          percent: 7
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
        {
          qid: 10,
          detail: "您的计划投资期限是",
          optionA: "1年以下",
          optionB: "1-3年",
          optionC: "3-5年",
          optionD: "5年以上",
          record: 0,
          percent: 5
        },
        {
          qid: 11,
          detail: "以下哪项最符合您的投资态度",
          optionA: "厌恶风险，不希望本金损失、希望获得稳定回报",
          optionB: "保守投资，不希望本金损失，愿意承担一定幅度的收益波动",
          optionC: "寻求资金的较高收益和成长性，愿意为此承担有限本金损失",
          optionD: "希望赚取高额回报，愿意为此承担较大本金损失",
          record: 0,
          percent: 6
        },
        {
          qid: 12,
          detail: "假设有两种投资：投资A预期获得10%的收益，可能承担的损失非常小；投资B预期获得30%的收益，但可能承担较大亏损。您会怎么支配您的投资",
          optionA: "全部投资于收益较小且风险较小的A",
          optionB: "同时投资A和B，但大部分资金投资于收益较小且风险较小的A",
          optionC: "同时投资A和B，但大部分资金投资于收益较大且风险较大的B",
          optionD: "全部投资于收益较大且风险较大的B",
          record: 0,
          percent: 8
        },
        {
          qid: 13,
          detail: "您认为自己能承受的最大投资损失是多少",
          optionA: "10%以内",
          optionB: "10%-30%",
          optionC: "30-50%",
          optionD: "超过50%",
          record: 0,
          percent: 6
        },
        {
          qid: 14,
          detail: "您投资发生损失后的心理",
          optionA: "寝食难安",
          optionB: "对情绪影响较大",
          optionC: "对情绪有些影响",
          optionD: "学习经验，照常生活",
          record: 0,
          percent: 6
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
