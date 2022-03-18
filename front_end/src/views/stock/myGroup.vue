<template>
  <div>
    <h2>我的自选</h2>
    <div>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">你确定要从投资组合中删掉这只股票?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete">取消</v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">确定</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card-title>
        组合一
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="stocks"
        item-key="name"
        show-select
        :search="search"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.quote_change="{ item }">
          <v-chip
            :color="getColorString(item.quote_change)"
            dark
          >
            {{ item.quote_change }}
          </v-chip>
        </template>
        <template v-slot:item.ups_and_downs="{ item }">
          <v-chip
            :color="getColorNumber(item.ups_and_downs)"
            dark
          >
            {{ item.ups_and_downs }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>

</template>

<script>
export default {
  name: "myGroup",
  data() {
    return {
      singleSelect: false,
      selected: [],
      search: "",
      dialogDelete: false,
      headers: [
        {
          text: "代码",
          align: "start",
          sortable: false,
          value: "code"
        },
        { text: "名称", value: "name" },
        { text: "最新价", value: "latest_price" },
        { text: "涨跌幅", value: "quote_change" },
        { text: "涨跌额", value: "ups_and_downs" },
        { text: "换手率", value: "turnover_rate" },
        { text: "成交量（手）", value: "volume" },
        { text: "成交额（元）", value: "Turnover" },
        { text: "操作", value: "actions", sortable: false }
      ],
      stocks: [
        {
          code: "000661",
          name: "长春高新",
          latest_price: 172.54,
          quote_change: "-0.95%",
          ups_and_downs: -1.66,
          turnover_rate: "2.31%",
          volume: "8.80万",
          Turnover: "115.19亿"
        },
        {
          code: "000662",
          name: "长春高新2",
          latest_price: 172.54,
          quote_change: "-0.94%",
          ups_and_downs: -1.66,
          turnover_rate: "2.31%",
          volume: "8.80万",
          Turnover: "175.19亿"
        },
        {
          code: "000663",
          name: "长春高新3",
          latest_price: 172.54,
          quote_change: "-0.92%",
          ups_and_downs: -1.66,
          turnover_rate: "2.81%",
          volume: "8.80万",
          Turnover: "195.19亿"
        }
      ]
    };
  },
  methods: {
    deleteItem(item) {
      this.editedIndex = this.stocks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.stocks.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1;
      });
    },
    getColorString(rate) {
      if (!rate.startsWith("-")) {
        return "red";
      } else {
        return "green";
      }
    },
    getColorNumber(rate) {
      if (rate > 0) {
        return "red";
      } else {
        return "green";
      }
    },
    recommend(){

    }
  }
};
</script>

<style scoped></style>
