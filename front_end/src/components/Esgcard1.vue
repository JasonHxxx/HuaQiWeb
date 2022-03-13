<template>
  <div>
    <div class="d-flex justify-start ma-10 ms-16">
      <div>
        <div id="img1">
          <div class="info_title_main">{{texts[0]}}</div>
        </div>
      </div>
      <div>
        <v-img :src="pic_list[1]" height="250px" width="240px"></v-img>
        <v-img :src="pic_list[0]" height="250px" width="240px"></v-img>
      </div>
      <div>
        <v-sheet color="grey lighten-3" height="250px" width="500px" class="info_title_little" >
          <p >
            {{ texts[1] }}
          </p>
        </v-sheet>
        <v-sheet color="blue lighten-3" height="250px" width="500px" dark class="info_title_little">{{ texts[2] }}</v-sheet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Esgcard1",
  data() {
    return {
      pic_list: [
        "https://gitee.com/huyuework/image/raw/master/2022/city.jpeg",
        "https://gitee.com/huyuework/image/raw/master/2022/technology.jpeg",
      ],
      texts: [
        "国际机构对ESG的定义：(1)MSCI：ESG投资是一个投资方法，通常被认为与可持续投资、社会责任投资、责任相关投资和甄别具有相同的意思。在MSCI的ESG研究中，我们将其定义为在投资决策过程中着重考虑环境、社会和治理因素。\n" +
        "\n" +
        "(2)金融时报：英国《金融时报》将ESG定义为“资本市场中使用的通用术语，供投资者用来评估公司行为并确定公司未来的财务绩效”。ESG“是非财务绩效指标的子集，其中包括可持续、道德和公司治理问题，例如管理公司的碳足迹并确保有适当的系统来确保问责制”。ESG是投资考虑因素、用于纳入投资决策和风险管理流程的风险评估策略。",
        "(1)MSCI：ESG投资是一个投资方法，通常被认为与可持续投资、社会责任投资、责任相关投资和甄别具有相同的意思。在MSCI的ESG研究中，我们将其定义为在投资决策过程中着重考虑环境、社会和治理因素。\n" +
        "\n" +
        "(2)金融时报：英国《金融时报》将ESG定义为“资本市场中使用的通用术语，供投资者用来评估公司行为并确定公司未来的财务绩效”。ESG“是非财务绩效指标的子集，其中包括可持续、道德和公司治理问题，例如管理公司的碳足迹并确保有适当的系统来确保问责制”。ESG是投资考虑因素、用于纳入投资决策和风险管理流程的风险评估策略。",
        "(4)贝莱德资管：环境、社会和治理(ESG)因素在全球主流投资者中越来越受到重视和考虑。ESG数据涵盖了一系列问题，包括公司碳排放的衡量标准、劳工和人权政策以及公司治理结构。决策者、资产所有者和整个公众都将ESG因素作为促进可持续商业实践和产品的手段。"
      ]
    };
  }
};
</script>

<style scoped>
#img1 {
  height: 500px;
  width: 650px;
  background-size: 100% 100%;
  background-repeat:no-repeat;
  background-image: url("https://gitee.com/huyuework/image/raw/master/2022/mountain.jpeg");
}
.info_title_main {
  padding-top: 20%;
  font-size: 30px;
  color: white;
  padding-inline-start: 4%;
}
.info_title_little {
  padding-top: 20%;
  font-size: 24px;
  padding-inline-start: 4%;
}

</style>
