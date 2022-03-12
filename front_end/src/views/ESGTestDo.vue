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
          <p class="text-h4 text--secondary d-flex justify-center">
            {{ testInfo.test_name }}
          </p>
          <div class="text--secondary">
            {{testInfo.test_detail}}<br />
            共 {{ testInfo.test_len }} 小题
          </div>
        </v-card-text>
      </v-sheet>
    </v-sheet>
    <!-- environmental   -->
    <div>
      <v-sheet class="mx-auto d-flex" max-width="800">
        <v-divider class="mt-6"></v-divider>
        <div class="part_name mx-4">ENVIRONMENTAL</div>
        <v-divider class="mt-6"></v-divider>
      </v-sheet>
      <v-list class="mx-auto" max-width="800">
        <div v-for="(q, i) in socialQuestions1" :key="q.qid" grey>
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ i + 1 }} .{{ q.detail }}
            <v-container class="px-0" fluid>
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
      <v-list class="mx-auto" max-width="800">
        <div v-for="q in socialQuestions2" :key="q.qid" grey>
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ q.qid }} .{{ q.detail }}
            <v-container class="px-0" fluid>
              <v-radio-group v-model="q.record" row>
                <v-radio value="1" :label="q.optionA"></v-radio>
                <v-radio value="2" :label="q.optionB"></v-radio>
                <v-radio value="3" :label="q.optionC"></v-radio>
                <v-radio value="4" :label="q.optionD"></v-radio>
                <v-radio value="5" :label="q.optionE"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-list>
    </div>

    <!-- social   -->
    <div>
      <v-sheet class="mx-auto d-flex" max-width="800">
        <v-divider class="mt-6"></v-divider>
        <div class="part_name mx-4">SOCIAL</div>
        <v-divider class="mt-6"></v-divider>
      </v-sheet>
      <v-list class="mx-auto" max-width="800">
        <div v-for="(q, i) in socialQuestions3" :key="q.qid" grey>
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ i + 1 }} .{{ q.detail }}
            <v-container class="px-0" fluid>
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
      <v-list class="mx-auto" max-width="800">
        <div v-for="q in socialQuestions4" :key="q.qid" grey>
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ q.qid }} .{{ q.detail }}
            <v-container class="px-0" fluid>
              <v-radio-group v-model="q.record" row>
                <v-radio value="1" :label="q.optionA"></v-radio>
                <v-radio value="2" :label="q.optionB"></v-radio>
                <v-radio value="3" :label="q.optionC"></v-radio>
                <v-radio value="4" :label="q.optionD"></v-radio>
                <v-radio value="5" :label="q.optionE"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-list>
    </div>
    <!-- governance   -->
    <div>
      <v-sheet class="mx-auto d-flex" max-width="800">
        <v-divider class="mt-6"></v-divider>
        <div class="part_name mx-4">GOVERNANCE</div>
        <v-divider class="mt-6"></v-divider>
      </v-sheet>
      <v-list class="mx-auto" max-width="800">
        <div v-for="(q, i) in socialQuestions5" :key="q.qid" grey>
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ i + 1 }} .{{ q.detail }}
            <v-container class="px-0" fluid>
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
      <v-list class="mx-auto" max-width="800">
        <div v-for="q in socialQuestions6" :key="q.qid" grey>
          <v-card-text class="question_detail text-darken-1" max-width="800">
            {{ q.qid }} .{{ q.detail }}
            <v-container class="px-0" fluid>
              <v-radio-group v-model="q.record" row>
                <v-radio value="1" :label="q.optionA"></v-radio>
                <v-radio value="2" :label="q.optionB"></v-radio>
                <v-radio value="3" :label="q.optionC"></v-radio>
                <v-radio value="4" :label="q.optionD"></v-radio>
                <v-radio value="5" :label="q.optionE"></v-radio>
              </v-radio-group>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
        </div>
      </v-list>
    </div>

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
// import { getTestDO, getTestSimpleInfo } from "@/api/test";
// import { submit } from "@/api/submit";

export default {
  name: "ESGTestDo",
  data() {
    return {
      T: true,
      F: false,
      socialQuestions1: [
        {
          qid: 1,
          detail: "企业环境风险的暴露程度会对企业绩效产生很大影响。",
          record: -1
        },
        {
          qid: 2,
          detail: "环境信息披露水平的提升非常有助于提升企业绩效。",
          record: -1
        },
        {
          qid: 3,
          detail: "能够较好使用自然资源的企业更加值得投资。",
          record: -1
        },
        {
          qid: 4,
          detail: "企业的能耗与污染排放水平是衡量企业价值的重要指标。",
          record: -1
        },
        {
          qid: 5,
          detail: "企业在节能创新方面加大投入十分有助于其绩效提升。",
          record: -1
        }
      ],
      socialQuestions2: [
        {
          qid: 6,
          detail:
            "A企业短期收益明显高于B企业，但环境风险也明显高于B企业，你会更偏向于哪个企业。",
          optionA: "绝对偏向于A",
          optionB: "比较偏向于A",
          optionC: "偏向程度一致",
          optionD: "比较偏向于B",
          optionE: "绝对偏向于B",
          record: -1
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
          record: -1
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
          record: -1
        }
      ],
      testInfo: {
        test_name: "ESG偏向问卷调查",
        test_len: 24,
        test_detail:
          "请对以下观点做出判断，我们将由此判断您对E、S、G的看重程度\n" +
          "每一类前5小问均按从左到右的顺序，记1-5分。每一类6、7、8问得分称以2之后与其他题得分相加计入总分。分数越高说明越看重E/S/G。"
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
    submit() {
      let flag = true;
      let x = this.socialQuestions1.length;
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
      }
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

  mounted() {},
  //
  // computed: {
  //
  // }
};
</script>

<style scoped>
.question_detail {
  font-size: large;
}
.part_name {
  font-size: 36px;
}
</style>
