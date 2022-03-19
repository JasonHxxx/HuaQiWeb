<template>
  <v-footer color="#1E3A4D" padless dark>
    <v-col class="ps-4">
      <h3 class="ma-4">我们的团队</h3>
      <div class="d-flex justify-start align-center group" v-for="(group, i) in team" :key="i">
        <div class="my-label">{{group.label}}</div>
        <div v-for="(one, j) in group.member" :key="j" class="members mx-1">
          <el-image
            :src="require('@/assets/team/' + one.pic)"
            class="member_img"
          ></el-image>
          <div class="my-content">{{ one.name }}</div>
        </div>
      </div>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col>
      <div class="d-flex justify-space-between align-center">
        <div class="pt-2">
          <v-btn
            v-for="link in links"
            :key="link.name"
            text
            class="my-2"
            @click="handleMore(link.path)"
          >
            {{ link.name }}
          </v-btn>
          <div class="mb-4 ms-4">
            {{ new Date().getFullYear() }} — <strong>Inno ESG</strong>
          </div>
        </div>
        <div>
          <v-img style="width: 200px;height: 200px" :src="require('@/assets/logo.png')">
          </v-img>
        </div>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    team: [
      {
        label: "指导老师",
        member: [{ name: "杨学伟", pic: "0.1.jpg" }]
      },
      {
        label: "组长",
        member: [{ name: "沈桓宇", pic: "2.22.jpg" }]
      },
      {
        label: "商业组",
        member: [{ name: "黄美鑫", pic: "1.1.jpg" },
          { name: "郭昭芃", pic: "2.1.jpg" },
          { name: "严舒廷", pic: "2.2.jpg" },
          { name: "郑海龙", pic: "2.3.jpg" },
          { name: "陆心仪", pic: "1.2.jpg" },
          { name: "陆晗宇", pic: "2.4.jpg" },
          { name: "王晨旭", pic: "1.3.jpg" },
          { name: "姜婧雯", pic: "1.4.jpg" }
        ]
      },
      {
        label: "机器学习组",
        member: [{ name: "赵思衡", pic: "2.5.jpg" },
          { name: "方盛俊", pic: "2.6.jpg" },
          { name: "王科", pic: "2.7.jpg" },
          { name: "徐一珩", pic: "2.8.jpg" },
          { name: "林滋芊", pic: "1.5.jpg" },
          { name: "陈程", pic: "2.9.jpg" }
        ]
      },
      {
        label: "文本挖掘组",
        member: [{ name: "侯万方", pic: "2.10.jpg" },
          { name: "顾玮婧", pic: "1.6.jpg" },
          { name: "孙思涵", pic: "1.8.jpg" }
        ]
      },
      {
        label: "投资策略组",
        member: [{ name: "符朕皓", pic: "2.11.jpg" },
          { name: "方振宇", pic: "2.12.jpg" }
        ]
      },
      {
        label: "前端",
        member: [{ name: "胡越", pic: "2.19.jpg" },
          { name: "许礼孟", pic: "2.21.jpg" },
          { name: "王涛", pic: "2.14.jpg" }
        ]
      },
      {
        label: "后端",
        member: [
          { name: "孟剑卫", pic: "2.15.jpg" },
          { name: "郭子坤", pic: "2.16.jpg" },
          { name: "夏宇", pic: "2.17.jpg" },
          { name: "喻磊", pic: "2.18.jpg" }
        ]
      },
    ],
    pictrueList: [],
    links: [
      { name: "Home", path: "/" },
      { name: "Contact us", path: "/" }
    ]
  }),
  methods: {
    handleMore(path) {
      alert("learn more!");
      this.$router.push(path);
    }
  }
};
</script>
<style>
.member_img {
  width: 30px;
  height: 30px;
}
.my-label {
  width: 6em;
  display: flex;
  font-size: 14px;
  padding-right: 1em;
  justify-content: right;
}
.group {
  padding-bottom: 1px;
  margin-top: 5px;
}
.my-content {
  padding-top: 0;
  margin-top: 0;
  display: flex;
  justify-content: center;
  font-size: xx-small;
}
</style>
