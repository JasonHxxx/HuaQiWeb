<template>
  <div>
    <div>
      <el-carousel height="500px">
        <el-carousel-item v-for="item in picList" :key="item">
          <el-image :src="item" class="big_img"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="background-color: rgba(127,127,125,0.1) " class="d-flex justify-center pb-4">
      <div style="width: 70%">
        <div class="d-flex justify-center align-center">
          <v-divider></v-divider>
          <div class="part_name mx-4">E S G</div>
          <v-divider></v-divider>
        </div>
        <div
          class="d-flex justify-space-between"
        >
          <InfoItem
            v-for="(info, i) in infoList.slice(0, 3)"
            :key="i"
            :title="info.title"
            :description="info.description"
            :pic="info.pic"
            :path="info"
          >
          </InfoItem>
        </div>
        <div class="d-flex justify-center align-center">
          <v-divider></v-divider>
          <div class="part_name mx-4">S T O C K</div>
          <v-divider></v-divider>
        </div>
        <div
          class="d-flex justify-space-between"
        >
          <InfoItem
            v-for="(info, i) in infoList.slice(3, 6)"
            :key="i"
            :title="info.title"
            :description="info.description"
            :pic="info.pic"
            :path="info.path"
          >
          </InfoItem>
        </div>
      </div>
<!--    <v-spacer></v-spacer>-->
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import InfoItem from "@/components/InfoItem.vue";
import Footer from "@/components/Footer.vue";
// import AboutUs from "@/components/AboutUs.vue";
export default {
  name: "first",
  components: {
    InfoItem,
    Footer,
    // AboutUs
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
          description:
            "Sustainalytics’ ESG Risk Ratings measure a company’s exposure to industry-specific material ESG risks and how well a company is managing those risks.",
          pic:
            "https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500",
          path: "/esg/intro"
        },
        {
          title: "ESG rating",
          description:
            "In order to view the company's ratings please click on this section.We offer a detailed presentation of three aspects for you.",
          pic:
            "https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500",
          path: "/esg/rate"
        },
        {
          title: "Community",
          description:
            "We provide you with a posting community where you can express your opinions and participate in community discussions.",
          pic:
            "https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500",
          path: "/community"
        },
        {
          title: "Investment portfolio",
          description:
            "By understanding your investment preferences, we will recommend different portfolios to you, which you can consider as a reference.",
          pic:
            "https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500",
          path: "/test"
        },
        {
          title: "Market index",
          description:
            "In this module, you can see the broader market index in the form of charts, including the Shanghai Composite Index and so on.",
          pic: "https://empic.dfcfw.com/760490394338418691/w1080h540/art",
          path: "/stock/index"
        },
        {
          title: "Stock depth analysis",
          description:
            "We help you analyze stock information in depth from multiple dimensions, which you can use as a reference.",
          pic:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fucms%2F2020_01%2FF96CBE690E19A583C58354D875665DD2A9F4D1E9_size335_w1270_h634.jpg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648451846&t=88538f0b5a7c01094f8abfb61918614c",
          path: "/stock/all"
        }
      ]
    };
  }
};
</script>

<style scoped>
.big_img {
  width: 100%;
}
.part_name {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 50px;
  color: #1E3A4D;
}
</style>
