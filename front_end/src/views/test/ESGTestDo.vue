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
            {{ testInfo.test_detail1 }}<br />
            {{ testInfo.test_detail2 }}<br />
            {{ testInfo.test_detail3 }}<br />
            共 {{ testInfo.test_len }} 小题
          </div>
        </v-card-text>
      </v-sheet>
    </v-sheet>
    <!-- environmental   -->
    <div>
      <v-sheet class="mx-auto d-flex justify-center" max-width="800">
        <div class="part_name mx-4">ENVIRONMENTAL</div>
      </v-sheet>
      <v-list class="mx-auto" max-width="800">
        <div v-for="(q, i) in eQuestions1" :key="q.qid">
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ i + 1 }} .{{ q.detail }}
            <v-container class="ms-0">
              <v-radio-group v-model="q.record" row>
                <v-radio value="1" label="完全不赞同"></v-radio>
                <v-radio value="2" label="不太赞同"></v-radio>
                <v-radio value="3" label="一般"></v-radio>
                <v-radio value="4" label="比较赞同"></v-radio>
                <v-radio value="5" label="非常赞同"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-list>
      <v-list class="mx-auto justify-start" max-width="800">
        <div v-for="q in eQuestions2" :key="q.qid" grey>
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ q.qid }} .{{ q.detail }}
            <v-container class="ms-0">
              <v-radio-group v-model="q.record" row>
                <v-radio value="2" :label="q.optionA"></v-radio>
                <v-radio value="4" :label="q.optionB"></v-radio>
                <v-radio value="6" :label="q.optionC"></v-radio>
                <v-radio value="8" :label="q.optionD"></v-radio>
                <v-radio value="10" :label="q.optionE"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-list>
    </div>

    <!-- social   -->
    <div>
      <v-sheet class="mx-auto d-flex justify-center" max-width="800">
        <div class="part_name mx-4">SOCIAL</div>
      </v-sheet>
      <v-list class="mx-auto justify-start" max-width="800">
        <div v-for="(q, i) in sQuestions1" :key="q.qid" grey>
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ i + 1 }} .{{ q.detail }}
            <v-container class="ms-0">
              <v-radio-group v-model="q.record" row>
                <v-radio value="1" label="完全不赞同"></v-radio>
                <v-radio value="2" label="不太赞同"></v-radio>
                <v-radio value="3" label="一般"></v-radio>
                <v-radio value="4" label="比较赞同"></v-radio>
                <v-radio value="5" label="非常赞同"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-list>
      <v-list class="mx-auto justify-start" max-width="800">
        <div v-for="q in sQuestions2" :key="q.qid">
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ q.qid }} .{{ q.detail }}
            <v-container class="ms-0">
              <v-radio-group v-model="q.record" row>
                <v-radio value="2" :label="q.optionA"></v-radio>
                <v-radio value="4" :label="q.optionB"></v-radio>
                <v-radio value="6" :label="q.optionC"></v-radio>
                <v-radio value="8" :label="q.optionD"></v-radio>
                <v-radio value="10" :label="q.optionE"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-list>
    </div>
    <!-- governance   -->
    <div>
      <v-sheet class="mx-auto d-flex justify-center" max-width="800">
        <div class="part_name mx-4">GOVERNANCE</div>
      </v-sheet>
      <v-list class="mx-auto justify-start" max-width="800">
        <div v-for="(q, i) in gQuestions1" :key="q.qid">
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ i + 1 }} .{{ q.detail }}
            <v-container class="ms-0">
              <v-radio-group v-model="q.record" row>
                <v-radio value="1" label="完全不赞同"></v-radio>
                <v-radio value="2" label="不太赞同"></v-radio>
                <v-radio value="3" label="一般"></v-radio>
                <v-radio value="4" label="比较赞同"></v-radio>
                <v-radio value="5" label="非常赞同"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-list>
      <v-list class="mx-auto justify-start" max-width="800">
        <div v-for="q in gQuestions2" :key="q.qid" grey>
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ q.qid }} .{{ q.detail }}
            <v-container class="ms-0">
              <v-radio-group v-model="q.record" row>
                <v-radio value="2" :label="q.optionA"></v-radio>
                <v-radio value="4" :label="q.optionB"></v-radio>
                <v-radio value="6" :label="q.optionC"></v-radio>
                <v-radio value="8" :label="q.optionD"></v-radio>
                <v-radio value="10" :label="q.optionE"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-list>
    </div>

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
// import { getTestDO, getTestSimpleInfo } from "@/api/test";
// import { submit } from "@/api/submit";

export default {
  name: "ESGTestDo",
  data() {
    return {
      T: true,
      F: false,
      testInfo: {
        test_name: "ESG偏向问卷调查",
        test_len: 24,
        test_detail1:
          "首先请填写一个问卷，以便我们更好地了解您在ESG方面的偏向。",
        test_detail2:
          "请对以下观点做出判断，我们将由此判断您对E、S、G的看重程度",
        test_detail3:
          "每一类前5小问均按从左到右的顺序，记1-5分。每一类6、7、8问得分称以2之后与其他题得分相加计入总分。分数越高说明越看重E/S/G。"
      },
      eQuestions1: [
        {
          qid: 1,
          detail: "企业环境风险的暴露程度会对企业绩效产生很大影响。",
          record: 0
        },
        {
          qid: 2,
          detail: "环境信息披露水平的提升非常有助于提升企业绩效。",
          record: 0
        },
        {
          qid: 3,
          detail: "能够较好使用自然资源的企业更加值得投资。",
          record: 0
        },
        {
          qid: 4,
          detail: "企业的能耗与污染排放水平是衡量企业价值的重要指标。",
          record: 0
        },
        {
          qid: 5,
          detail: "企业在节能创新方面加大投入十分有助于其绩效提升。",
          record: 0
        }
      ],
      eQuestions2: [
        {
          qid: 6,
          detail:
            "A企业短期收益明显高于B企业，但环境风险也明显高于B企业，你会更偏向于哪个企业。",
          optionA: "绝对偏向于A",
          optionB: "比较偏向于A",
          optionC: "偏向程度一致",
          optionD: "比较偏向于B",
          optionE: "绝对偏向于B",
          record: 0
        },
        {
          qid: 7,
          detail:
            "作为长期投资的公司，短期内你更想看到它的收益提高，还是更想看到它的环境风险降低。",
          optionA: "非常希望短期收益提高",
          optionB: "可以将少量短期收益的提高,转变为环境风险的降低",
          optionC: "希望二者均等变化",
          optionD: "可以将少量环境风险的降低，转变为短期收益的提高",
          optionE: "非常希望环境风险降低",
          record: 0
        },
        {
          qid: 8,
          detail:
            "作为一个在环境领域发生过“黑天鹅”时间的公司，虽然在此领域没有很好的改观，但是当下有极高的预期收益，你会去投资吗。",
          optionA: "会进行大量投资",
          optionB: "较为偏好，但会谨慎投资",
          optionC: "以中立态度进行投资",
          optionD: "较为厌恶，但会少量投资",
          optionE: "完全不会投资",
          record: 0
        }
      ],
      sQuestions1: [
        {
          qid: 1,
          detail: "在选择投资目标时会重点关注目标企业的行业竞争环境。",
          record: 0
        },
        {
          qid: 2,
          detail: "能较好的处理员工问题的企业极具投资价值。",
          record: 0
        },
        {
          qid: 3,
          detail: "在面对金融和经济风险时更加从容的企业更具投资价值。",
          record: 0
        },
        {
          qid: 4,
          detail:
            "如果目标公司对其所在行业的发展有较大贡献则说明其投资潜力较大。",
          record: 0
        },
        {
          qid: 5,
          detail: "客户和消费者的满意度也是衡量企业价值的重要指标。",
          record: 0
        }
      ],
      sQuestions2: [
        {
          qid: 6,
          detail:
            "A企业短期收益明显高于B企业，但环境风险也明显高于B企业，你会更偏向于哪个企业。",
          optionA: "绝对偏向于A",
          optionB: "比较偏向于A",
          optionC: "偏向程度一致",
          optionD: "比较偏向于B",
          optionE: "绝对偏向于B",
          record: 0
        },
        {
          qid: 7,
          detail:
            "作为长期投资的公司，短期内你更想看到它的收益提高，还是更想看到它的环境风险降低。",
          optionA: "非常希望短期收益提高",
          optionB: "可以将少量短期收益的提高,转变为环境风险的降低",
          optionC: "希望二者均等变化",
          optionD: "可以将少量环境风险的降低，转变为短期收益的提高",
          optionE: "非常希望环境风险降低",
          record: 0
        },
        {
          qid: 8,
          detail:
            "作为一个在环境领域发生过“黑天鹅”时间的公司，虽然在此领域没有很好的改观，但是当下有极高的预期收益，你会去投资吗。",
          optionA: "会进行大量投资",
          optionB: "较为偏好，但会谨慎投资",
          optionC: "以中立态度进行投资",
          optionD: "较为厌恶，但会少量投资",
          optionE: "完全不会投资",
          record: 0
        }
      ],
      gQuestions1: [
        {
          qid: 1,
          detail: "公司的信息披露水平是你选择该公司时关注的重要因素。",
          record: 0
        },
        {
          qid: 2,
          detail: "您在选择投资目标时不会考虑公司治理存在异常的公司。",
          record: 0
        },
        {
          qid: 3,
          detail: "利益相关方参与度和协调程度较高的公司非常值得信赖。",
          record: 0
        },
        {
          qid: 4,
          detail: "长期合规操作的公司一般都具有投资价值。",
          record: 0
        },
        {
          qid: 5,
          detail: "管理层架构较好的公司更容易受到投资者青睐。",
          record: 0
        }
      ],
      gQuestions2: [
        {
          qid: 6,
          detail:
            "A企业短期收益明显高于B企业，但环境风险也明显高于B企业，你会更偏向于哪个企业。",
          optionA: "绝对偏向于A",
          optionB: "比较偏向于A",
          optionC: "偏向程度一致",
          optionD: "比较偏向于B",
          optionE: "绝对偏向于B",
          record: 0
        },
        {
          qid: 7,
          detail:
            "作为长期投资的公司，短期内你更想看到它的收益提高，还是更想看到它的环境风险降低。",
          optionA: "非常希望短期收益提高",
          optionB: "可以将少量短期收益的提高,转变为环境风险的降低",
          optionC: "希望二者均等变化",
          optionD: "可以将少量环境风险的降低，转变为短期收益的提高",
          optionE: "非常希望环境风险降低",
          record: 0
        },
        {
          qid: 8,
          detail:
            "作为一个在环境领域发生过“黑天鹅”时间的公司，虽然在此领域没有很好的改观，但是当下有极高的预期收益，你会去投资吗。",
          optionA: "会进行大量投资",
          optionB: "较为偏好，但会谨慎投资",
          optionC: "以中立态度进行投资",
          optionD: "较为厌恶，但会少量投资",
          optionE: "完全不会投资",
          record: 0
        }
      ],
      msg: "",
      showSuccessDialog: false,
      showFailDialog: false,
      colorList: ["gray lighten-3", "gray lighten0"]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getSum(qlist) {
      let sum = 0;
      for (let i in qlist) {
        sum += parseInt(qlist[i].record);
      }
      return sum;
    },

    submit() {
      let flag = true;
      let e = this.getSum(this.eQuestions1) + this.getSum(this.eQuestions2);
      let s = this.getSum(this.sQuestions1) + this.getSum(this.sQuestions2);
      let g = this.getSum(this.gQuestions1) + this.getSum(this.gQuestions2);
      window.localStorage.setItem("e", e);
      window.localStorage.setItem("s", s);
      window.localStorage.setItem("g", g);
      window.localStorage.setItem("done1", true);
      // const tid = this.testInfo.id;
      // const userId = parseInt(window.localStorage.getItem("userId"));
      // for (let i = 0; i < x; i++) {
      //   let submitInfo = {
      //     uid: userId,
      //     tid: tid,
      //     qid: this.questionList[i].id,
      //     ans: this.questionList[i].record
      //   };
      //   const payload = {
      //     ...submitInfo
      //   };
      //   console.log(payload);
      // submit(payload).then(res => {
      //   flag = res.code === 1 && flag;
      //   if (res.code !== 1) {
      //     this.showFailDialog = true;
      //     this.msg = res.msg;
      //     setTimeout(() => {
      //       this.showFailDialog = false;
      //     }, 1000);
      //   }
      // });
      // }
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
  font-size: 18px;
}
.part_name {
  font-size: 30px;
}
#bg {
  background-image: url("https://gitee.com/huyuework/image/raw/master/2022/chuttersnap-rFD16ws0MQY-unsplash.jpg");
}
</style>
