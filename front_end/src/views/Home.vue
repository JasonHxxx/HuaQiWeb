<template>
  <div>

    <div>
      <el-carousel height="500px">
        <el-carousel-item v-for="item in picList" :key="item">
          <el-image :src="item" class="big_img"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mt-6 d-flex justify-start" style="width: 70%;margin-left: 19.5%">
      <InfoItem
        v-for="(info, i) in infoList.slice(0,3)"
        :key="i"
        :title="info.title"
        :description="info.description"
        :pic="info.pic"
        :path="info"
      >
      </InfoItem>
    </div>

    <v-divider></v-divider>

    <div class="mt-6 d-flex justify-start" style="width: 90%;margin-left: 19.5%">
      <InfoItem
          v-for="(info, i) in infoList.slice(3,6)"
          :key="i"
          :title="info.title"
          :description="info.description"
          :pic="info.pic"
          :path="info.path"
      >
      </InfoItem>
    </div>
    <v-spacer></v-spacer>
    <Footer></Footer>
  </div>
</template>
<script>
import InfoItem from "@/components/InfoItem.vue";
import Footer from "../components/Footer";
export default {
  name: "first",
  components: {
    InfoItem,
    Footer
  },
  data() {
    return {
      picList: [
        "https://box.nju.edu.cn/f/68d10c93b3dd4da6958f/?dl=1",
        "https://box.nju.edu.cn/f/a0cc288283db47519819/?dl=1",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fucms%2F2020_01%2FF96CBE690E19A583C58354D875665DD2A9F4D1E9_size335_w1270_h634.jpg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648451846&t=88538f0b5a7c01094f8abfb61918614c"
      ],
      infoList: [
        {
          title: "ESG introduction",
          description: "Sustainalytics’ ESG Risk Ratings measure a company’s exposure to industry-specific material ESG risks and how well a company is managing those risks.",
          pic:"https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500",
          path:"/Esg"
        },
        {
          title: "ESG rating",
          description: "In order to view the company's ratings please click on this section.We offer a detailed presentation of three aspects for you.",
          pic:"https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500",
          path:"/EsgRe"
        },
        {
          title: "ESG predictions",
          description: "We provides ESG score prediction services for enterprises in the coming years.This will help you analyze a company's growth potential.",
          pic:"https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500",
          path:"/Esg"
        },
        {
          title: "Investment portfolio",
          description: "By understanding your investment preferences, we will recommend different portfolios to you, which you can consider as a reference.",
          pic:"https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500",
          path:"/Esg/esgtest"
        },
        {
          title: "Market index",
          description: "In this module, you can see the broader market index in the form of charts, including the Shanghai Composite Index and so on.",
          pic: "https://empic.dfcfw.com/760490394338418691/w1080h540/art",
          path:"/Esg"
        },
        {
          title: "Stock depth analysis",
          description: "We help you analyze stock information in depth from multiple dimensions, which you can use as a reference.",
          pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fucms%2F2020_01%2FF96CBE690E19A583C58354D875665DD2A9F4D1E9_size335_w1270_h634.jpg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648451846&t=88538f0b5a7c01094f8abfb61918614c",
          path:"/Esg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.big_img{
  width: 100%;

}
</style>
