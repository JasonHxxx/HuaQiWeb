<!--显示每一条评论-->
<template>
  <div>
    <v-card class="comm" outlined>
      <div class="inner">
        <div>
          <span>{{ name }}• </span>
          <span>{{ time }}</span>
        </div>
        <div>
          {{ comment.comment }}
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { parseTime } from "../../util/parseTime";
import { getUser } from "../../api/user";

export default {
  name: "CommentsItem",

  data() {
    return {
      name: ""
    };
  },

  computed: {
    time() {
      return parseTime(this.comment.time);
    }
  },

  methods: {
    getData() {
      getUser(this.comment.userId).then(res => {
        // alert(this.comment.userId);
        this.name = res.uname;
      });
    }
  },

  props: {
    comment: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
.inner {
  width: 98%;
  margin-top: 5px;
  margin-bottom: 5px;
}
.comm {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}
</style>
