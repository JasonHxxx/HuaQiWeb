<template>
  <div>
    <v-container class="pl-16 pr-16">
      <!-- alert-->
      <v-alert
        class="alert"
        outlined
        type="success"
        text
        v-show="showAlert"
        transition="scroll-y-transition"
      >
        {{ alertMsg }}
      </v-alert>

      <!-- dialog-->
      <!-- 课件详情-->
      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
              <v-card-title>
                <span class="headline">课件详情</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="文件类型"
                        v-model="currentFile.fileType"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="文件大小"
                        v-model="currentFile.fileSize"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="文件名"
                        v-model="currentFile.fileName"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="课件标题"
                        v-model="currentFile.title"
                        readonly
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="[true, false]"
                        label="是否免费"
                        v-model="currentFile.freeFlag"
                        readonly
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="[true, false]"
                        label="是否可下载"
                        v-model="currentFile.downloadFlag"
                        readonly
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :items="[true, false]"
                        label="是否有权查看"
                        v-model="currentFile.availableFlag"
                        readonly
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn
                  v-show="currentFile.downloadFlag"
                  color="blue darken-1"
                  text
                  @click="handleDownloadFile"
                >
                  下载课件
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
      <v-dialog v-model="timeDialog" width="500">
        <v-card>
          <v-card-title>测试未开始</v-card-title>

          <v-card-text>
            测试开始后才能作答
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="timeDialog = false">
              确认
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-row>
        <v-col>
          <!-- 课件 -->
          <v-card max-width="600" class="mx-auto mt-8">
            <v-toolbar color="indigo lighten-2" dark>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>下载课件</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>

            <v-list subheader two-line>
              <v-list-item v-for="file in files" :key="file.title">
                <v-list-item-avatar>
                  <v-icon class="grey lighten-1" dark>
                    mdi-file
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="file.title"></v-list-item-title>

                  <v-list-item-subtitle
                    v-text="file.fileSize"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn icon>
                    <v-icon
                      color="grey lighten-1"
                      @click="showFileDialog(file.id)"
                      >mdi-more</v-icon
                    >
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
          <!--测试-->
          <v-card max-width="600" class="mx-auto mt-8">
            <v-toolbar color="indigo lighten-2" dark>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>课程测试</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-list subheader two-line>
              <v-list-item v-for="test in testList" :key="test.id">
                <v-list-item-avatar>
                  <v-icon class="grey lighten-1" dark>
                    mdi-ab-testing
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ test.test_name }}
                    <v-chip
                      class="ma-1 font-weight-bold"
                      v-show="test.availability==='CLOSED'"
                      color="#DCEDC8"
                      text-color="#43A047"
                    >
                      {{ test.score }}分
                    </v-chip>
                  </v-list-item-title>

                  <v-list-item-subtitle>
                    开始：{{ test.start }} 结束：{{ test.end }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                    icon
                    v-if="test.availability==='CLOSED'"
                    color="orange"
                    @click="seeResult(test.id,test.score)"
                  >
                    <v-icon left>
                      mdi-eye
                    </v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    v-else-if="test.availability==='UNDERWAY'"
                    color="green lighten-2"
                    @click="doTest(test.id)"
                  >
                    <v-icon left>
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                  <v-btn
                      icon
                      v-else
                      color="grey"
                      @click="showTimeDialog"
                  >
                    <v-icon left>
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <!-- 课程信息 -->
        <v-col>
          <form
            class="pa-12 grey lighten-5 mt-8"
            style="position: sticky;top: 0"
          >
            <v-text-field
              v-model="courseInfo.name"
              label="课程名称"
              readonly
            ></v-text-field>
            <v-text-field
              v-model="courseInfo.id"
              label="课程ID"
              readonly
            ></v-text-field>
            <v-select
              :items="types"
              v-model="courseInfo.type"
              label="课程分类"
              readonly
            ></v-select>
            <v-textarea
              v-model="courseInfo.intro"
              label="课程简介"
              readonly
            ></v-textarea>
            <v-text-field
              v-model="courseInfo.school"
              label="所属学校"
              readonly
            ></v-text-field>
            <v-text-field
              v-model="courseInfo.createTime"
              label="创建时间"
              readonly
            ></v-text-field>
            <v-text-field
              v-model="courseInfo.teacherName"
              label="创建教师"
              readonly
            ></v-text-field>
            <v-switch
              v-model="isCharge"
              :label="`是否为付费课程: ${isCharge.toString()}`"
              readonly
            ></v-switch>
            <v-text-field
              v-show="isCharge"
              v-model="courseInfo.cost"
              label="课程价格(元)"
              readonly
            ></v-text-field>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getCourseWareByCourse } from "@/api/courseWare";
import { getCourseById } from "@/api/course";
import { FILE_BASE_PATH } from "@/api/file";
import { getAllTest } from "@/api/test";

export default {
  name: "CourseEdit",
  data() {
    return {
      timeDialog: false,
      courseInfo: {},
      types: ["初级", "中级", "高级"],
      msg: "",
      files: [],
      showAlert: false,
      alertMsg: "",
      dialog: false,
      testList: [],
      currentFile: {
        id: 0,
        courseId: 0,
        number: 0,
        title: "",
        fileName: "",
        fileType: "",
        fileSize: "",
        freeFlag: false,
        downloadFlag: true,
        availableFlag: false,
        uploadTime: ""
      }
    };
  },

  computed: {
    isCharge: function() {
      return this.courseInfo.cost !== 0;
    }
  },

  methods: {
    showTimeDialog() {
      this.timeDialog = true;
    },
    refreshFile() {
      const { courseId } = this.$route.params;
      const uid = window.localStorage.getItem("userId");
      getCourseWareByCourse({ courseId, uid }).then(res => {
        this.files = res || [];
      });
    },

    loadCourse() {
      const { courseId } = this.$route.params;
      const uid = window.localStorage.getItem("userId");
      getCourseById({ uid, courseId }).then(res => {
        console.log(res);
        this.courseInfo = res;
      });
    },
    loadTest() {
      const { courseId } = this.$route.params;
      console.log(courseId);
      const uid = window.localStorage.getItem("userId");
      getAllTest({ courseId, uid }).then(res => {
        this.testList = res;
        console.log(this.testList);
      });
    },

    showFileDialog(courseWareId) {
      const currentFile = this.files.find(f => f.id === courseWareId);
      console.log(currentFile);
      this.currentFile = currentFile;
      this.dialog = true;
    },

    handleDownloadFile() {
      window.open(`${FILE_BASE_PATH}/${this.currentFile.fileName}`);
    },
    doTest(testId) {
      console.log(testId);
      this.$router.push("test/do/" + testId);
    },
    seeResult(testId, score) {
      console.log(testId);
      window.localStorage.setItem("score", score);
      this.$router.push("test/result/" + testId);
    }
  },
  mounted() {
    this.refreshFile();
    this.loadCourse();
    this.loadTest();
  }
};
</script>

<style scoped>
.alert {
  position: fixed;
  left: 50%;
  top: 100px;
  z-index: 999;
}
</style>
