import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Chart from 'taro-echarts'
import { Card } from '@/components'
import Charts from '@/mock'
import geoJson from '../../mock/map/geoJson'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '图表示例'
  }

  state = {
    chartKey: ''
  }

  componentWillMount() {
    let { name, type } = this.$router.params
    if (name) {
      this.updateTitle(name)
    }
    this.setState({ chartKey: type })
  }

  // 改变标题
  updateTitle = (title) => {
    Taro.setNavigationBarTitle({ title })
  }

  onBeforeSetOption = (echarts, chartKey) => {
    if (chartKey !== 'map') {
      return
    }
    echarts.registerMap('HK', geoJson)
  }

  render() {
    const { chartKey } = this.state
    let showCharts = chartKey ? Charts[chartKey] : []
    return (
      <View className='chart-page-container'>
        {
          showCharts.map(item => {
            const { id, title, option, height, loading } = item
            let tempHeight = showCharts.length === 1 ? 'calc(100vh - 80px)' : height
            return (
              <Card
                key={id}
                title={title}
              >
                <Chart
                  chartId={id}
                  height={tempHeight}
                  loading={loading}
                  option={option}
                  onBeforeSetOption={(echarts) => this.onBeforeSetOption(echarts, chartKey)}
                />
              </Card>
            )
          })
        }
      </View>
    )
  }
}
