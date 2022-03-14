<template>
  <div style="width: 90%;" class="d-flex flex-column mx-auto">
    <div class="mt-6 end d-flex justify-end">
      <el-input placeholder="请输入内容" v-model="search" style="width: 200px;">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="mt-6 d-flex justify-space-between">
      <EsgReItem
        v-for="(info, i) in esgList"
        :key="i"
        :description="info.description"
        :kind="info.kind"
        :card-color="color_list[i]"
        :kind-des="info.kindDes"
      >
      </EsgReItem>
    </div>
  </div>
</template>

<script>
import EsgReItem from "../components/EsgReItem";
export default {
  name: "EsgRe",
  components: { EsgReItem },
  data() {
    return {
      search:"",
      descriptions: [
        [
          "企业在生产经营中的环境绩效较高，在生产过程中能够系统地管理和控制各类污染物的排放，对废物的处理也达到最优标准。此外，企业具备较好的节能创新能力，在绿色研发上的投入较多。",
          "企业较好地遵守了环境治理政策，在能耗与污染排放方面付出努力，但是在处理结果上并没有达到最佳水平。企业应当继续提升生产经营中的环境绩效，提高自然资源使用效率，加强节能创新能力。",
          "企业在环境治理方面表现不佳，能耗较大，并且对污染物排放的有效控制并不到位，面临着较高的环境风险。该企业急需提升自己的环境绩效，需要在绿色业务上投入更多。"
        ],
        [
          "公司在社会责任方面表现优异，不仅在员工管理，福利与薪酬，客户满意度方面位于行业领先，竞争力较强。其自身的运营状况较为良好，能够应对一定的经济和金融风险。",
          "公司在社会责任方面表现较好，重视与外部社会之间的内在联系，包括人的权利、相关方利益等。在员工管理，股东回报，消费者满意度等方面也在逐步提升，向行业领先者发展。",
          "公司在社会责任方面存在较大进步空间。对员工、债权人、消费者这三大主体的责任意识较为薄弱，在同行业内竞争力压力较大，同时应对金融经济风险的能力较弱。"
        ],
        [
          "企业拥有完善的现代企业制度，围绕受托责任合理分配股东、董事会、管理层权利，已经形成从发展战略到具体行动的科学管理制度体系。企业的异常处理机制也较为完善，能够较好地应对大股东变现，高管离职等异常情况。此外，企业在信息披露上可靠性与及时性强，积极接受群众和政府的监督。",
          "企业内部治理结构完善，董事会、监事会、经理层均运行状况良好，定期发布公司治理报告，接受外界监督。但是在企业制度上可以继续完善，进一步提升企业架构的科学性和稳定性，同时加强处理公司异常情况的水平。",
          "企业在公司治理方面表现不佳。董事会和管理层的组织架构有较大改善空间。公司由于缺乏科学完善的管理机制，在应对治理异常时的处理能力较弱。此外，公司在信息披露方面有待加强，急需提升社会责任报告的可靠性以及发布的及时性。"
        ]
      ],
      color_list: ["#43A047", "#FFA000",  "#26c6da"],
      esgList: [
        {
          kind: "E",
          kindDes: "nvironmental",
          description: "",
          rate: 2
        },
        {
          kind: "S",
          kindDes: "ocial",
          description: "",
          rate: 3
        },
        {
          kind: "G",
          kindDes: "overnance",
          description: "",
          rate: 4
        }
      ]
    };
  },
  methods: {
    loadData() {
      let tem;
      let n = this.esgList.length;
      for (let i = 0; i < n; i++ ) {
        tem = this.esgList[i].rate;
        if (tem > 4) {
          this.esgList[i].description = this.descriptions[i][0];
        } else if (tem > 3) {
          this.esgList[i].description = this.descriptions[i][1];
        } else {
          this.esgList[i].description = this.descriptions[i][2];
        }
      }
      console.log(this.esgList);
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

<style scoped>
.end {

}
</style>
