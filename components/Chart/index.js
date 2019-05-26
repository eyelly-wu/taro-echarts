import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import _isEqual from 'lodash/isEqual.js'
import Nerv from 'nervjs'
import * as echarts from '../ec-canvas/echarts'

const IS_H5 = process.env.TARO_ENV === 'h5'
const IS_WEAPP = process.env.TARO_ENV === 'weapp'

export default class Chart extends Component {

  config = {
    component: true,
    usingComponents: {
      'ec-canvas': '../ec-canvas/ec-canvas'
    }
  }

  componentDidMount() {
    if (IS_WEAPP) {
      this.renderWeappChart()
    } else if (IS_H5) {
      this.renderH5Chart()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { option: newOption } = nextProps
    if (!_isEqual(nextProps, this.props)) {
      this.refreshChart(newOption)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_isEqual(this.props, nextProps)
  }

  refreshChart = (newOption) => {
    const { option } = this.props
    if (this.chartInstance) {
      this.chartInstance.setOption(newOption || option, true)
    }
  }

  renderH5Chart = () => {
    const { option, chartId } = this.props
    let node = document.getElementById(chartId)
    this.beforeSetOption()
    this.chartInstance = echarts.init(node)
    this.chartInstance.setOption(option)
  }

  renderWeappChart = () => {
    const { option } = this.props
    this.chartRef.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(chart)
      this.beforeSetOption()
      this.chartInstance = chart
      chart.setOption(option)
      return chart
    })
  }

  beforeSetOption = () => {
    const { onBeforeSetOption } = this.props
    onBeforeSetOption && onBeforeSetOption(echarts)
  }

  setChartRef = node => this.chartRef = node

  render() {
    const { chartId, width, height, customStyle } = this.props
    let chartContainerStyle = `${customStyle}width:${width};height:${height};`

    return (
      <View style={chartContainerStyle}>
        {
          IS_WEAPP
            ? <ec-canvas
              ref={this.setChartRef}
              canvasId={chartId}
              ec={{
                lazyLoad: false
              }}
            />
            : null
        }
        {
          IS_H5
            ? <View
              style={`width:${width};height:${height};`}
              id={chartId}
            />
            : null
        }
      </View>
    )
  }
}

Chart.propTypes = {
  chartId: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  customStyle: PropTypes.string,
  option: PropTypes.object.isRequired,
  onBeforeSetOption: PropTypes.func
}

Chart.defaultProps = {
  width: '100%',
  height: '200px',
  customStyle: '',
  onBeforeSetOption: null
}
