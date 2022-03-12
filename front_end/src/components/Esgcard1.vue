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
        <v-sheet color="grey lighten-3" height="250px" width="500px" class="info_title_little">{{ texts[1] }}</v-sheet>
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
        "What is ESG (Environmental, Social, and Governance)?",
        "aaa aaaaaaaaaa aaaaa aaaaaaaaaaaaa",
        "wwwwww wwwwwwwwwwww wwwwwwwwww"
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
