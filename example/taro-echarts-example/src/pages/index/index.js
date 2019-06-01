import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import '@/styles/iconfont/iconfont.weapp.css'
import Charts from '@/mock'
import './index.scss'

const CHARTS = [
  { name: '折线图', icon: 'icontubiaozhexiantu', type: 'line' },
  { name: '柱状图', icon: 'icontubiaozhuzhuangtu', type: 'bar' },
  { name: '饼图', icon: 'icontubiao08', type: 'pie' },
  { name: '散点图', icon: 'iconsandiantu', type: 'scatter' },
  { name: '地图', icon: 'iconditu', type: 'map' },
  { name: 'k线图', icon: 'iconKxiantu', type: 'candlestick' },
  { name: '雷达图', icon: 'iconicon-test', type: 'radar' },
  { name: '盒须图', icon: 'iconxiangxingtu', type: 'boxplot' },
  { name: '热力图', icon: 'iconrelitu', type: 'heatmap' },
  { name: '关系图', icon: 'iconguanxitu', type: 'graph' },
  { name: '路径图', icon: 'iconlujingtu', type: 'lines' },
  { name: '树图', icon: 'iconfanmi-shuxingjiegou', type: 'tree' },
  { name: '矩阵', icon: 'iconjuzhen', type: 'treemap' },
  { name: '旭日图', icon: 'iconxuritu', type: 'sunburst' },
  { name: '平行坐标系', icon: 'iconpinghangzuobiao', type: 'parallel' },
  { name: '桑基图', icon: 'iconsangjitu', type: 'sankey' },
  { name: '漏斗图', icon: 'iconloudoutu', type: 'funnel' },
  { name: '仪表盘', icon: 'iconyibiao', type: 'gauge' },
  { name: '象形柱图', icon: 'iconpictorialbar', type: 'pictorialBar' },
  { name: '主题河流图', icon: 'iconzhutiheliutu', type: 'themeRiver' },
  { name: '日历坐标系', icon: 'iconrilizuobiaoxi', type: 'calendar' },
  { name: '数据集', icon: 'iconshujuji', type: 'dataset' },
  { name: '数据区域缩放', icon: 'iconquyusuofang', type: 'dataZoom' },
  { name: '拖拽', icon: 'icontuozhuai', type: 'drag' },
  { name: '富文本', icon: 'iconfuwenben', type: 'richText' },
  { name: 'loading', icon: 'iconloading', type: 'loading' }
]

export default class Index extends Component {

  config = {
    navigationBarTitleText: '支持图表'
  }

  routeTo = ({ type, name }) => {
    if (Charts[type]) {
      Taro.navigateTo({ url: `/pages/chart/index?type=${type}&name=${name}` })
    } else {
      Taro.showToast({
        title: '暂无示例',
        icon: 'none'
      })
    }
  }

  render() {
    return (
      <View className='page-container'>
        <View className='menus-container'>
          {
            CHARTS.filter(({ type }) => Charts[type]).map(item => {
              const { name, icon } = item
              return (
                <View
                  key={name} className='menus-container__item'
                  onClick={this.routeTo.bind(this, item)}
                >
                  <View className='menus-container__item__icon'>
                    <View className={' iconfont ' + icon} />
                  </View>
                  <Text className='menus-container__item__name'>{name}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}
