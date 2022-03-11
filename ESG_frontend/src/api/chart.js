import request from '@/utils/request'

export function getChartData(type) {
  return request({
    url: '/chartData',
    methods: 'get',
    params: { type }
  })
}
