<template>
  <div>
    <v-container fluid>
      <div class="d-flex justify-start align-center">
        <v-btn v-if="status === '0'" dark color="cyan" @click="changeStatus">点击按回复时间查看</v-btn>
        <v-btn v-else-if="status === '1'" dark color="cyan" @click="changeStatus">点击按回帖时间查看</v-btn>
        <v-spacer></v-spacer>
        <div>
          <v-btn fab color="cyan" dark @click.stop="dialog = true">
          <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
      <div v-for="post in posts" :key="post.postId">
        <v-card>
          <v-row class="ma-4">
            <post-item :post="post"></post-item>
          </v-row>
        </v-card>
      </div>
      <v-pagination
          v-model="currentPage"
          :length="totalPage"
          circle
          color="cyan"
      ></v-pagination>
    </v-container>
    <v-dialog
        v-model="dialog"
        max-width="800"
    >
      <v-card  width="800px">
        <div class="container">
          <add-posts></add-posts>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PostItem from "./PostItem";
import { getPostsByCourseOrderByPostTime, getPostsByCourseOrderByReplyTime } from "@/api/post";
import addPosts from "./addPosts";

export default {
  name: "PostContainer",
  components: {
    addPosts,
    PostItem
  },

  data() {
    return {
      posts: [],
      totalPage: 1,
      currentPage: 1,
      dialog:false,
      status: "0"  //status为0表示按发帖时间查看帖子 为1表示按回复时间查看帖子
    };
  },

  watch: {
    currentPage: {
      handler: function (val) {
        this.getPostsByCourse(val);
      }
    }
  },

  methods: {
    goToPOST() {
      const courseId = this.$route.params.courseId;
      this.$router.push(`/posts/create/${courseId}`);
    },
    getPostsByCourse(page) {
      this.posts = [{postId: 1, title: "为什么完善信息披露迫在眉睫？",content:"近年来A股市场频频“爆雷”，从财务表现看并无异常，但是在公司治理、诚信经营等非财务指标方面则存在着重大漏洞。\n" +
            "\n" +
            "对于将ESG因素纳入投资分析的挑战仍然严峻，评估行业如何识别和获取有效信息，以及企业统一性披露是否能更加积极主动。对此，有媒体报道称“机构探索ESG投资本土化，信息披露不足是最大挑战”。然而，投资者不会等待更通用的框架，来进行投资评估或决策，信息披露亟待加速。\n" +
            "\n" +
            "2021年3月，国际评估准则理事会发布了一份非常关键的引导文件《ESG和企业估值》，该文件标志着国际评估准则理事会作为评估行业的国际性组织，在探讨将ESG纳入更系统估值方法的道路上迈出了第一步。", time: "2022-03-01 21:56:03"},
        {postId: 2, title: "现在推动ESG相关信息披露的进程如何？", content:"企业不主动披露，不意味着没有其他市场手段引导。资本市场对于ESG的披露要求在不断提高，比如香港联交所发布的有关讨论《环境、社会及管治报告指引》及相关《上市规则》条文的咨询文件已经于2020年7月1日生效。\n" +
              "\n" +
              "2021年2月5日，中国证监会就《上市公司投资者关系管理指引（征求意见稿）》向社会公开征求意见。在该指引的主要修订条目中，证监会增加了有关公司的ESG信息沟通内容；5月7日，在证监会发布修订后的最新年报格式准则征求意见稿中，也有几处与ESG相关的重要修订内容。\n" +
              "\n" +
              "在国际上，具有影响力的主要信息披露框架，有全球报告倡议组织、碳信息披露项目、可持续会计准则委员会、气候相关财务信息披露工作组等。",time: "2022-03-10 21:56:03"},
        // {postId:3,title:"为什么ESG要素应归类为“预财务信息”？",coontent:"长期以来，一些人误以为ESG投资是情怀驱动的所谓公益和慈善型投资理念。实际上，投资者的出发点，在于利用ESG理念来指导其投资策略，提高回报并降低投资风险。ESG要素并非财务指标，但并非没有财务影响。\n" +
        //       "\n" +
        //       "我们试着回答几个问题：企业是否意识到气候变化对财务业绩的影响，社会实践能否吸引和留住客户与人才，公司治理环境可以承受“黑天鹅事件”等不可预见的挑战吗？\n" +
        //       "\n" +
        //       "这些问题是杞人忧天吗？显然不是。ESG因素可以成为影响财务业绩的重要指标。新冠疫情在全球的流行，急剧加速了技术变革，ESG 因素被投资者纳入对避险资产的考虑，进而在股票交易时更多地考虑保值质量，而不是近期现金流。不能在估值过程中彻底考虑这些因素，就无法解释大部分市场价值。因此，我们不应忽视ESG要素对企业在中长周期内潜在的财务影响，ESG要素应被定义为“预财务信息”，而不应视为“非财务信息”。",time:"2022-03-10 21:56:03"}
             ];

      if(this.status === "0") {
        getPostsByCourseOrderByPostTime(page, this.$route.params.courseId).then(
            res => {
              this.totalPage = res.pages;
              this.posts = res.list;
            }
        );
      }else{
        getPostsByCourseOrderByReplyTime(page, this.$route.params.courseId).then(
            res => {
              this.totalPage = res.pages;
              this.posts = res.list;
              console.log(this.posts);
            }
        );
      }
    },

    changeStatus(){
      console.log(this.status);
      if(this.status === "0"){
        this.status = "1";
      }else{
        this.status = "0";
      }
      this.getPostsByCourse(this.currentPage);
    }
  },

  created() {
    this.getPostsByCourse(1);
  }
};
</script>

<style scoped>

</style>
