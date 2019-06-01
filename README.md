# Taro-Echarts

适用于Taro项目的ECharts图表组件，基于项目[echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin)封装

## 安装

```bash
npm i -S taro-echarts
```

## 配置

修改Taro项目的配置`config/index`

1. [copy](https://nervjs.github.io/taro/docs/config-detail.html#copy)
```js
copy: {
  patterns: [
    // 需添加如下配置
    {
      from: 'node_modules/taro-echarts/components/ec-canvas/',
      to: 'dist/npm/taro-echarts/components/ec-canvas',
      ignore: ['ec-canvas.js', 'wx-canvas.js']
    }
  ],
  options: {
  }
}
```

2. [h5.esnextModules](https://nervjs.github.io/taro/docs/config-detail.html#h5esnextmodules)

```js
h5: {
  // 需添加如下配置
  esnextModules: ['taro-echarts'],
  ...
}
```


## 使用

引入

```js
import Chart from 'taro-echarts'
```

示例代码：以折线图为例
```js
<Chart
  chartId='chart-example-line'
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
```

## API
| 属性名            | 说明                                                                                                                                                                                                                        | 类型            | 默认值 |
| ----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :----- |
| chartId           | 图表id,须确定唯一性                                                                                                                                                                                                         | string          | -      |
| width             | 图表的宽                                                                                                                                                                                                                    | string          | 100%   |
| height            | 图表的高                                                                                                                                                                                                                    | string          | 200px  |
| option            | ECharts的[option配置](https://www.echartsjs.com/option.html)                                                                                                                                                                | object          | -      |
| onBeforeSetOption | 在echarts首次调用setOption前执行该方法，该方法会返回echarts的引用，可以在该方法中[注册地图](https://www.echartsjs.com/api.html#echarts.registerMap)，[注册主题](https://www.echartsjs.com/api.html#echarts.registerTheme)等 | (echarts)=>void | -      |
| customStyle       | 自定义容器样式                                                                                                                                                                                                              | string          | -      |
| loading           | 是否显示loading效果                                                                                                                                                                                                         | bool            | false  |
| loadingConf       | loading效果的样式[配置](https://www.echartsjs.com/api.html#echartsInstance.showLoading)                                                                                                                                     | object          | -      |

## 支持度

|  h5   | 微信小程序 | ReactNative | 支付宝小程序 | 百度小程序 | 字节跳动小程序 |
| :---: | :--------: | :---------: | :----------: | :--------: | :------------: |
|   √   |     √      |      ×      |      ×       |     ×      |       ×        |

## License

[MIT](https://github.com/eyelly-wu/taro-echarts/blob/master/LICENSE)
