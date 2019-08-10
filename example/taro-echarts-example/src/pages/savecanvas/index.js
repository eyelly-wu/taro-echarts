import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Chart from 'taro-echarts'

export default class Page extends Component {

  setChartRef = node => this.chartRef = node

  preview = async () => {
    const path = await this.chartRef.getImagePath()
    Taro.previewImage({ current: path, urls: [path] })
  }

  render() {
    return (
      <View>
        <Button onClick={this.preview}>查看生成图片</Button>
        <Chart
          ref={this.setChartRef}
          chartId='chart-example-line'
          loadingConf={{ textColor: 123 }}
          option={{
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
            }]
          }}
        />
      </View>
    )
  }
}
