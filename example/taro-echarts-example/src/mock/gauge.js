export default [
  {
    id: 'gauge-chart-demo-1',
    title: 'Gauge',
    option: {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: [{ value: 50, name: '完成率' }]
        }
      ]
    }
  }
]