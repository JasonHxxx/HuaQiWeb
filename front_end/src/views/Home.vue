<template>
  <div>
    <div>
      <el-carousel height="400px">
        <el-carousel-item v-for="item in picList" :key="item">
          <el-image :src="item" class="big_img"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mt-6 d-flex justify-start" style="width: 70%;margin-left: 15%">
      <InfoItem
        v-for="(info, i) in infoList"
        :key="i"
        :title="info.title"
        :description="info.description"
        :pic="info.pic"
      >
      </InfoItem>
    </div>
  </div>
</template>
<script>
import InfoItem from "@/components/InfoItem.vue";
export default {
  name: "first",
  components: {
    InfoItem
  },
  data() {
    return {
      picList: [
        "https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500",
        "https://empic.dfcfw.com/760490394338418691/w1080h540/art",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fucms%2F2020_01%2FF96CBE690E19A583C58354D875665DD2A9F4D1E9_size335_w1270_h634.jpg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648451846&t=88538f0b5a7c01094f8abfb61918614c"
      ],
      infoList: [
        {
          title: "Foundations of ESG Investing",
          description: "hhhhhhhhhhhhhhhhhhdddddddddddddddddd",
          pic:"https://img1.baidu.com/it/u=3726131626,3339493601&fm=253&fmt=auto&app=138&f=JPEG?w=887&h=500"
        },
        {
          title: "Foundations of ESG Investing",
          description: "hh222222222222222hdddddddddddddddddd",
          pic: "https://empic.dfcfw.com/760490394338418691/w1080h540/art",

        },
        {
          title: "Foundations of ESG Investing",
          description: "333333333333333hhdddddddddddddddddd",
          pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fucms%2F2020_01%2FF96CBE690E19A583C58354D875665DD2A9F4D1E9_size335_w1270_h634.jpg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648451846&t=88538f0b5a7c01094f8abfb61918614c"
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
