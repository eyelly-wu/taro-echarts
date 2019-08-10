import { ComponentClass } from 'react'

interface OnBeforeSetOption {
  (echarts: any): void
}

interface LoadingConf {
  text?: string
  color?: string
  textColor?: string
  maskColor?: string
  zlevel?: number
}

interface ChartProps {
  chartId: string
  width?: string
  height?: string
  option: any
  onBeforeSetOption?: OnBeforeSetOption
  customStyle?: string
  loading?: boolean
  loadingConf?: LoadingConf
}

declare const Chart: ComponentClass<ChartProps>

export default Chart