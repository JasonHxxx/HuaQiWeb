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
<!--        <v-sheet color="grey lighten-3" height="250px" width="400px" class="info_title_little">{{ texts[1] }}</v-sheet>-->
        <v-sheet color="blue lighten-3" height="500px" width="740px" dark class="info_title_little">{{ texts[2] }}</v-sheet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Esgcard2",
  data() {
    return {
      pic_list: [
        "https://gitee.com/huyuework/image/raw/master/2022/city.jpeg",
        "https://gitee.com/huyuework/image/raw/master/2022/technology.jpeg",
      ],
      texts: [
        "ESG在中国的政策背景与现实需求：",
        "aaa aaaaaaaaaa aaaaa aaaaaaaaaaaaa",
        "在中国谈论ESG，最大的政策背景就是“碳中和”与“共同富裕”。事实上，重视减少碳排放本身也是社会责任的一种，为了实现“E”、“S”，更需要企业管理理念、治理结构等根本性的改革，因此ESG中的三个维度是相辅相成的。十四五规划已经为未来五年绿色化转型与发展定调，这对市场投融资主题是一个较为明确的指引。随着针对绿色发展的法律与政策的健全，绿色主题的可投资性也会增强，我国“E”相关的基金将进一步发展。\n" +
        "\n" +
        "作者：诺亚财富\n" +
        "链接：https://www.zhihu.com/question/21565680/answer/2085628289\n" +
        "来源：知乎\n" +
        "著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
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
