<template>
  <div class="mt-2">
    <div class="ma-4"><v-chip color="primary" label>我的自选</v-chip></div>
    <div>
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        editable
        style="margin-left: 16px; width: 95%"
        @edit="handleTabsEdit"
      >
        <el-tab-pane
          v-for="(item, i) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          <span slot="label"
            ><i class="el-icon-folder" />{{ " " + item.title }}</span
          >
          <div class="justify-end d-flex">
            <el-input
              v-model="stock_code"
              style="width: 150px; margin-right: 10px"
              size="mini"
              right
              placeholder="input stock code"
              type="number"
              @blur="inputCheck()"
            ></el-input>
            <el-button
              class="el-icon-plus"
              type="primary"
              size="mini"
              @click.prevent="addStock(i)"
            />
          </div>
          <el-table
            border
            height="280"
            :data="item.comboData"
            class="table"
            stripe
          >
            <el-table-column prop="code" label="Stock code" />
            <el-table-column prop="name" label="Stock name" />
            <el-table-column prop="price" label="Stock price" />
            <el-table-column label="action" align="center">
              <template slot-scope="scope">
                <i
                  class="el-icon-delete"
                  style="font-size:18px;cursor: pointer;"
                  @click="handleDelete(scope.$index, i)"
                />
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="ma-4"><v-chip color="primary" label>推荐组合</v-chip></div>
    <div class="d-flex justify-space-between" style="width: 70%;">
      <recommend-item
        v-for="(re, i) in recommendData"
        :key="i"
        :index="i"
        :items="re"
        @addCombo="addCombo"
      ></recommend-item>
    </div>
  </div>
</template>

<script>
import RecommendItem from "@/components/RecommendItem";
export default {
  name: "GroupCard",
  components: {
    RecommendItem
  },
  data() {
    return {
      stock_code: "",
      editableTabsValue: "1",
      currentIndex: 1,
      addIndex: 1,
      editableTabs: [
        {
          title: "Combo1",
          name: "1",
          comboData: []
        }
      ],
      tabIndex: 1,
      recommendData: [
        [
          { name: "美年健", data: "1.53%", code: "MNJK" },
          { name: "阿尔特", data: "0.42%", code: "AET" },
          { name: "美盈", data: "1.31%", code: "MYS" }
        ],
        [
          { name: "海特高新", data: "0.09%", code: "HTGX" },
          { name: "凯莱", data: "1.23%", code: "KLY" },
          { name: "蓝帆医疗", data: "1.9%", code: "LFYL" }
        ],
        [
          { name: "莱茵生物", data: "1.49%", code: "LYSW" },
          { name: "瀛通通讯", data: "2.37%", code: "YTTX" },
          { name: "华源控股", data: "0.08%", code: "HYKG" }
        ],
      ]
    };
  },
  mounted() {
    const combo1 = {
      code: "GLD",
      name: "格林",
      price: "10.89"
    };
    const combo2 = {
      code: "DXLT",
      name: "东旭蓝",
      price: "3.18"
    };
    const combo3 = {
      code: "FCHB",
      name: "富春环",
      price: "5.61"
    };
    this.editableTabs[0].comboData.push(combo1);
    this.editableTabs[0].comboData.push(combo2);
    this.editableTabs[0].comboData.push(combo3);
    console.log(this.editableTabs);
  },
  methods: {
    addCombo(codes,names) {
      const newTabIndex = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "Combo" + ++this.addIndex,
        name: newTabIndex,
        comboData: []
      });
      this.editableTabsValue = newTabIndex;
      this.currentIndex = newTabIndex;
      console.log(newTabIndex+"new");
      console.log(this.addIndex+"add");
      let tabIndex = this.addIndex-1;
      for (let i = 0; i < 3; i++) {
        const stockRow = {
          code: codes[i],
          name: names[i],
          price: "" + 100 + Math.round(Math.random() * 1000)
        };
        this.editableTabs[tabIndex].comboData.push(stockRow);
        this.stock_code = "";
      }
    },
    inputCheck() {
      if (this.stock_code.length !== 6) {
        this.$message({
          type: "error",
          message: "stock code length should be 6"
        });
        return false;
      } else {
        return true;
      }
    },
    addStock(index) {
      if (this.stock_code.length !== 6) {
        return;
      }
      const stockRow = {
        code: this.stock_code,
        name: "xxxxxx",
        price: "" + 100 + Math.round(Math.random() * 1000)
      };
      this.editableTabs[index].comboData.push(stockRow);
      this.stock_code = "";
    },
    handleDelete(index, i) {
      this.$confirm("sure to delete this stock?", "tips", {
        confirmButtonText: "confirm",
        cancelButtonText: "cancel",
        type: "warning"
      })
        .then(() => {
          this.editableTabs[i].comboData.remove(index);
          this.$message({
            type: "success",
            message: "delete successfully!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "cancel delete"
          });
        });
    },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        const newTabIndex = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "Combo" + ++this.addIndex,
          name: newTabIndex,
          comboData: []
        });
        this.editableTabsValue = newTabIndex;
        this.currentIndex = newTabIndex;
        console.table(this.editableTabs.comboData);
      }
      if (action === "remove") {
        if (this.editableTabs.length <= 1) {
          return false;
        }
        const self = this;
        const tabs = self.editableTabs;
        let activeName = self.editableTabsValue;
        console.log("a:" + activeName);
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        self.editableTabsValue = activeName;
        self.editableTabs = tabs.filter(tab => tab.name !== targetName);
        self.editableTabs.map((tab, index) => {
          tab.title = "Comb" + (index + 1);
          self.addIndex = index + 1;
        });
        self.currentIndex = self.editableTabsValue;
        self.editableTabs.map((tab, index) => {
          console.log(tab, index, self.currentIndex);
          if (self.currentIndex === tab.name) {
            self.currentFlag = index;
          }
        });
        console.log(targetName);
        // this.comboData.splice(targetName - 1, 1)
        self.$message({
          type: "success",
          message: "delete successfully !"
        });
        // const tabs = this.editableTabs
        // let activeName = this.editableTabsValue
        // if (activeName === targetName) {
        //   tabs.forEach((tab, index) => {
        //     if (tab.name === targetName) {
        //       const nextTab = tabs[index + 1] || tabs[index - 1]
        //       if (nextTab) {
        //         activeName = nextTab.name
        //       }
        //     }
        //   })
        // }
        //
        // this.editableTabsValue = activeName
        // this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }
  }
};
</script>
