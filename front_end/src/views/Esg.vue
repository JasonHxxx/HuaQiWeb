<template>
  <div>
    <!-- 文章标题 -->
    <h2  class="title">这是文章的标题</h2>
    <!-- 文章描述 -->
    <h6 class="description"></h6>
    <!-- 文章内容 -->
    <div v-html="content"></div>
    <!-- 标签 -->
    <div class="tag-box"></div>



    <Esgcard1>
    </Esgcard1>
    <Esgcard2>
    </Esgcard2>
    <Esgcard3>
    </Esgcard3>


  </div>
</template>

<script>
import Esgcard1 from "../components/Esgcard1";
import Esgcard2 from "../components/Esgcard2";
import Esgcard3 from "../components/Esgcard3";
export default {
  name: "Esg",
  components: { Esgcard1, Esgcard2 , Esgcard3}

};
</script>

<style scoped>

</style>
