<template>
  <div>
    <el-tabs tab-position="left" id="slide_tab">
      <el-tab-pane label="深证指数">
        <stock-info-item
          open="11765.31"
          close="11537.24"
          low="11331.23"
          high="12034.46"
          volumn="5.11"
          money="6697.33"
          name="ShenZhen Stock Exchange Composite Index"
        >
        </stock-info-item>
        <div class="chart-container2">
          <chart chart-type="szec" id="szec"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="上证指数">
        <stock-info-item
          open="3170.67"
          close="3177.79"
          low="3023.30"
          high="3063.97"
          volumn="4.45"
          money="5223.05"
          name="Shanghai Stock Exchange Composite Index">
        </stock-info-item>
        <div class="chart-container2">
          <chart chartType="ssec" id="ssec"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="创业板指">
        <stock-info-item
          open="2549.15"
          close="2504.78"
          low="2478.44"
          high="2639.93"
          volumn="1.54"
          money="2822.71"
          name="Growth Enterprise Index">
        </stock-info-item>

        <div class="chart-container2">
          <chart chartType="gei" id="gei" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Chart from '@/components/charts/MixChart'
import stockInfoItem from '@/components/StockInfoItem'

export default {
  name: 'IndexChart',
  components: { Chart,stockInfoItem },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.chart-container2 {
  width: calc(80vw);
  height: calc(95vh );
}
#slide_tab {
  width: 100%;
  height: calc(95vh );
}
</style>
