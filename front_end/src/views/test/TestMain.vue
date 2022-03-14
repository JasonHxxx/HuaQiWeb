<template>
  <div class="out">
    <div class="mx-auto in">
      <v-row class="pa-6">
        <v-card color="#1F7087" dark width="50%">
          <v-card-title>
            {{ test1.test_name }}
          </v-card-title>
          <v-card-text>
            {{ test1.test_description }}
          </v-card-text>
          <v-card-actions @click="doEsgTest">
            <v-btn class="ml-2" outlined size="small" v-if="!done1">
              开始测试
            </v-btn>
            <v-btn class="ml-2" outlined size="small" v-else>
              再次测试
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card width="50%" v-if="done1">
          <v-card-title>
            您的测评结果为
          </v-card-title>
          <v-card-text class="">
            <div>
              E:{{ e }}<br />
              S:{{ s }}<br />
              G:{{ g }}
            </div>
            <div>
              <ve-pie
                height="200px"
                :data="chartData"
                :settings="chartSettings"
              ></ve-pie>
            </div>
          </v-card-text>
        </v-card>
      </v-row>
      <v-row class="pa-6">
        <v-card color="#385F73" dark width="50%">
          <v-card-title>
            {{ test2.test_name }}
          </v-card-title>
          <v-card-text>
            {{ test2.test_description }}
          </v-card-text>
          <v-card-actions @click="doRiskTest">
            <v-btn class="ml-2" outlined size="small" v-if="!done1">
              开始测试
            </v-btn>
            <v-btn class="ml-2" outlined size="small" v-else>
              再次测试
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card width="50%" v-if="done2">
          <v-card-title>
            您的测评结果为
          </v-card-title>
          <v-card-text>
            <v-row dense class="align-center d-flex">
              <v-col >总得分：{{ score }}</v-col>
              <v-col >
                <v-chip :color="color_list[risk_result]" dark>{{ risk_result_list[risk_result] }}</v-chip>
              </v-col>
            </v-row>
            <v-row>
              <div class="ms-2">
                {{ risk_result_description[risk_result] }}
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mdiPlay } from "@mdi/js";
export default {
  name: "TestMain",
  data() {
    return {
      test1: {
        test_name: "ESG偏向问卷调查",
        test_description: "通过此问卷，我们将更好地了解您在ESG方面的偏向。"
      },
      test2: {
        test_name: "投资者风险偏好和承受能力测评",
        test_description:
          "通过此问卷，我们将更好地了解您在投资时的风险偏好和承受能力。"
      },
      e: 0,
      s: 0,
      g: 0,
      mark: 0,
      done1: false,
      done2: true,
      score: 0,
      risk_result: 0,
      risk_result_list: ["保守型", "稳健性", "成长型", "进取型"],
      risk_result_description: [
        "不想承担任何风险，投资理财的目的在于保值。",
        "害怕风险，但是又希望保本的基础上又有一定的收益。",
        "综合考虑风险和收益，愿意承受有限的风险。",
        "热衷于在高风险中博取高收益，不怕本金损失。"
      ],
      color_list: ["#FFA000", "#43A047", "#448AFF", "#E53935"],
      icon: {
        mdiPlay
      },
      chartSettings: {
        type: "pie",
        radius: 50,
        offsetY: 100,
        formatter: "{b}: {d}"
      },
      chartData: {
        columns: ["item", "score"],
        rows: [
          { item: "e", score: "1" },
          { item: "s", score: "1" },
          { item: "g", score: "1" }
        ]
      }
    };
  },
  methods: {
    doEsgTest() {
      this.$router.push("test/esgtest");
    },
    doRiskTest() {
      this.$router.push("test/risktest");
    },
    loadData() {
      this.e = window.localStorage.getItem("e");
      this.s = window.localStorage.getItem("s");
      this.g = window.localStorage.getItem("g");
      this.chartData.rows[0]["score"] = this.e;
      this.chartData.rows[1]["score"] = this.s;
      this.chartData.rows[2]["score"] = this.g;
      this.done1 = window.localStorage.getItem("done1");
      this.done2 = window.localStorage.getItem("done2");
      this.score = parseFloat(window.localStorage.getItem("score"));
      this.risk_result = parseInt(this.score - 0.5);
      console.log(this.risk_result);
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style scoped>
.in {
  width: 800px;
  height: calc(100vh);
  background-color: white;
}
.out {
  background-image: url("https://box.nju.edu.cn/f/68d10c93b3dd4da6958f/?dl=1");
  width: 100%;
  height: calc(100vh);
}
</style>
