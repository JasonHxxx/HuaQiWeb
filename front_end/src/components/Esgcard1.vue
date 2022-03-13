<template>
  <div>
    <div class="d-flex justify-start ma-10 ms-16">
      <div>
        <div id="img1">
          <div class="info_title_main">{{texts[0]}}</div>
        </div>
      </div>
<!--      <div>-->
<!--        <v-img :src="pic_list[1]" height="250px" width="240px"></v-img>-->
<!--        <v-img :src="pic_list[0]" height="250px" width="240px"></v-img>-->
<!--      </div>-->
      <div>
        <v-sheet color="blue lighten-3" height="250px" width="500px" dark class="info_title_little"><h2>MSCI</h2>{{ texts[1] }}</v-sheet>
        <v-sheet color="grey lighten-5" height="250px" width="500px" class="info_title_little text_color" >
          <h3>荷宝资管</h3>
            {{ texts[3] }}
        </v-sheet>
              </div>
      <div>
        <v-sheet color="grey lighten-5" height="250px"  width="500px" class="info_title_little text_color" >
          <h3>金融时报</h3>
            {{ texts[2] }}
        </v-sheet>
        <v-sheet color="blue lighten-3" height="250px" width="500px" dark class="info_title_little"><h3>贝莱德资管</h3>{{ texts[4] }}</v-sheet>
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
        "国际机构对ESG的定义",
        "ESG投资是一个投资方法，通常被认为与可持续投资、社会责任投资、责任相关投资和甄别具有相同的意思。在MSCI的ESG研究中，我们将其定义为在投资决策过程中着重考虑环境、社会和治理因素。",
        "英国《金融时报》将ESG定义为“资本市场中使用的通用术语，供投资者用来评估公司行为并确定公司未来的财务绩效”。ESG“是非财务绩效指标的子集，其中包括可持续、道德和公司治理问题，例如管理公司的碳足迹并确保有适当的系统来确保问责制”。ESG是投资考虑因素、用于纳入投资决策和风险管理流程的风险评估策略。",
        "ESG意味着使用环境、社会和治理因素来评估公司和国家在可持续性方面的先进程度。一旦获得了关于这三个指标的足够数据，就可以在决定购买哪些股票或债券时将它们整合到投资过程中。",
        "环境、社会和治理(ESG)因素在全球主流投资者中越来越受到重视和考虑。ESG数据涵盖了一系列问题，包括公司碳排放的衡量标准、劳工和人权政策以及公司治理结构。决策者、资产所有者和整个公众都将ESG因素作为促进可持续商业实践和产品的手段。"
      ]
    };
  }
};
</script>

<style scoped>
#img1 {
  height: 500px;
  width: 330px;
  background-size: 100% 100%;
  background-repeat:no-repeat;
  background-image: url("https://gitee.com/huyuework/image/raw/master/2022/mountain.jpeg");
}
.info_title_main {
  padding-top: 60%;
  font-size: 30px;
  color: white;
  font-weight: bold;
  padding-inline-start: 4%;
}
.text_color{
  color: #646e72;
}
.info_title_little {
  padding-top: 5%;
  font-size: 18px;
  padding-inline-start: 4%;
}
</style>
