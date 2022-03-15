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
        member: [{ name: "小明", pic: "logo.png" }]
      },
      {
        label: "金融组",
        member: [{ name: "小明", pic: "logo.png" }]
      },
      {
        label: "机器学习组",
        member: [{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" },{ name: "小明", pic: "mountain.jpeg" }]
      },
      {
        label: "开发组",
        member: [{ name: "小明", pic: "logo.png" }]
      }
    ],
    pictrueList: [],
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/" },
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
