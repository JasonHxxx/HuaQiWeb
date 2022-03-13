<template>
  <div>
    <div class="d-flex justify-start ma-10 ms-16">
      <div>
        <!--        <v-sheet color="grey lighten-3" height="250px" width="400px" class="info_title_little">{{ texts[1] }}</v-sheet>-->
        <v-sheet color="blue lighten-3" height="500px" width="740px" dark class="info_title_little">{{ texts[2] }}</v-sheet>
      </div>
      <div>
        <div id="img1">
          <div class="info_title_main">{{texts[0]}}</div>
        </div>
      </div>
      <!--      <div>-->
      <!--        <v-img :src="pic_list[1]" height="250px" width="240px"></v-img>-->
      <!--        <v-img :src="pic_list[0]" height="250px" width="240px"></v-img>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Esgcard3",
  data() {
    return {
      pic_list: [
        "https://gitee.com/huyuework/image/raw/master/2022/city.jpeg",
        "https://gitee.com/huyuework/image/raw/master/2022/technology.jpeg",
      ],
      texts: [
        "ESG框架下，我们怎么看投资",
        "aaa aaaaaaaaaa aaaaa aaaaaaaaaaaaa",
        "ESG投资策略有机会带来明显超额收益：以ESG为重点的指数（MSCI新兴市场ESG净回报指数）自2009年以来的总回报持续跑赢传统标准指数（MSCI新兴市场净回报指数）。其次，避免踩雷：随着A股市场信息愈发有效，寻找α的难度和成本逐渐增加，避免“踩雷”相比筛选优质公司将扮演更为重要的角色。ESG作为综合评判公司风险管控能力的指标天然地是最佳排雷指标\n" +
        "\n" +
        "作者：诺亚财富\n" +
        "链接：https://www.zhihu.com/question/21565680/answer/2085628289\n" +
        "来源：知乎\n" +
        "著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。；\n" +
        "ESG信息有助于从非财务角度挖掘好公司：公司财报主要侧重于从财务的角度描述公司的运营状况，而ESG信息可以从非财务层面为投资人披露更多为投资所用的另类信息，例如制造业企业披露的能耗水平往往反映了一个公司的生产技术的先进程度"
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
