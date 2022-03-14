<template>
  <div>
    <el-tabs tab-position="left" id="slide_tab">
      <el-tab-pane label="深证指数">
        <stock-info-item
          name="ShenZhen Stock Exchange Composite Index">
        </stock-info-item>
        <div class="chart-container2">
          <chart chart-type="szec" id="szec"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="上证指数">
        <stock-info-item
            name="Shanghai Stock Exchange Composite Index">
        </stock-info-item>
        <div class="chart-container2">
          <chart chartType="ssec" id="ssec"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="创业板指">
        <stock-info-item
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
