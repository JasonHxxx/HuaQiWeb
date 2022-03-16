<template>
  <div>
      <blockquote class="blockquote" >ESG是Environmental（环境）、Social（社会）、和Governance（治理）的缩写，是一种关注企业环境、社会、公司治理绩效而非传统财务绩效的投资理念和企业评价标准。环境是指考虑企业对环境的影响，例如企业环保政策、员工环保意识、生产废弃物排放措施等；社会是指考虑企业对社会的影响，例如企业社区关系、员工健康、职场性别平等等；治理是指考虑企业的公司治理，例如内部权力争夺、管理层的有效监督、高管腐败等。投资者可以通过观测企业ESG评级来评估投资对象在绿色环保、履行社会责任等方面的贡献，对企业是否符合长期投资作出判断。</blockquote>
    <div class="article-content markdonpmwn-body" v-html="contentInner" />


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
  components: { Esgcard1, Esgcard2 , Esgcard3},
  methods:{
    mounted() {
      window.addEventListener('scroll', this.scrollToTop)
    }
  }
};
</script>

<style scoped>

</style>
