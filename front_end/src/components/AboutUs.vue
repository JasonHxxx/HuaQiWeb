<template>
  <div>
    <div>
      <div class="i_title">我们的产品</div>
      <div class="i_content">{{ product }}</div>
    </div>
    <div>
      <div class="i_title">我们的logo</div>
      <div class="i_content">{{ logo }}</div>
    </div>
    <div>
      <div class="i_title">指导老师</div>
      <div class="i_content">{{ teacher }}</div>
    </div>    <div>
      <div class="i_title">我们的团队</div>
      <div class="i_content">{{ team }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      product:
        "Nudger是由NJU Analyst团队开发的基于分析师网络与心理账户的投资组合推荐平台。本产品充分考虑证券分析师在资本市场中的信息中介作用及其群体间存在的相互影响的行为，通过关联分析师的作用，去除市场噪声，有效消除个股预测波动。在此基础上，本款软件利用行为金融学中心理账户理论，为客户提供全方位专业化的投资分析和决策辅助，从而可以让不同投资者根据需求自由调节可行的收益和风险比例，实现精准收益。",
      logo:
        "产品Logo包含着我们的产品灵感。我们的项目名Network-based Portfolio Construction Program（基于分析师网络的动态投资组合构建系统）构成了三分之一的圆环，正中的NUDGER取自诺贝尔经济学奖获得者著名行为金融学家Richard Thaler所提出的“助推”理论，选取其作为我们的产品名，表示了我们的产品可针对投资者的不理性行为，进行积极的引导，从而引领投资者做出正确的投资策略。而构图右上方的半片枫叶，象征了鸿运和自制力，代表着我们产品是可靠的，我们推荐的投资组合是安全可盈利的。Logo整体使用青色，象征了年轻与永恒，代表了该产品虽处在初期发展阶段，但有着雄心与远见，未来可期。",
      teacher:
        "俞红海，南京大学教授、博士生导师，工程管理学院副院长，南京大学教学委员会委员，美国南加州大学访问学者，国家社科基金重大项目首席专家，兼任中国管理现代化研究会金融管理委员会委员、中国青年金融学者联谊会理事，以及金融科技教育与研究50人论坛成员、中国金融期货交易所市场发展咨询委员会委员等职。主要研究方向：行为金融、公司金融与公司治理、金融科技等，具体领域包括个人与机构投资者行为、IPO定价与询价制度改革、量化风险管理，以及上市公司并购重组、管理层股权激励，投资者画像等。在“Management Science”、“Journal of Empirical Finance”、“Journal of Futures Markets”、《经济研究》、《管理世界》、《管理科学学报》和《金融研究》等高水平学术期刊发表论文四十余篇，另有十余篇论文入选“45th  EFA Annual Meeting(2018)”、“2017 FMA Annual Meeting”、“2010 American Economic Association”、“中国金融国际年会(CICF)”等高水平学术会议，出版学术专著两部、译著一部。主持国家社科基金重大项目1项，国家自然科学基金项目4项，以及教育部人文社科项目一项，同时参与了上海证券交易所重点项目多个课题的研究工作。担任《经济研究》、《管理世界》、《管理科学学报》、《金融研究》、《财经研究》、《系统工程理论与实践》，以及“Energy Economics”、“European Journal of Finance”、“International Review of Economics and Finance”、“International Review of Financial Analysis”、“Accounting and Finance”和“Applied Economics”等20余本国内外学术期刊长期审稿人，以及国家自然科学基金匿名评审专家。",
      team:
        "NJUanalyst团队由南京大学最杰出的师生队伍组成，指导老师及参赛队员来自南京大学多个专业领域且各有所长。在南京大学工程管理学院俞红海教授的指导下，团队19名成员划分为软件组和网络组，组合组和商业组，分别负责软件开发，分析师网络选股策略，基于心理账户的推荐策略和商业模式设计。每个成员发挥自身在系统开发或商业分析方面的专业特长，为本项目的开发、完善以及发展而共同努力。",
    };
  },
  mounted() {
  }
};
</script>

<style lang="less" module>
</style>
