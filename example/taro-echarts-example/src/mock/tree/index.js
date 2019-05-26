import data from './data.js'

function func(dataProps) {
  if (Array.isArray(dataProps.children)) {
    dataProps.children.forEach((item, index) => {
      index % 2 === 0 && (item.collapsed = true)
      func(item)
    })
  }
}

func(data)

export default [
  {
    id: 'tree-chart-demo-1',
    title: 'tree Simple',
    option: {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',

          data: [data],

          top: '1%',
          left: '10%',
          bottom: '1%',
          right: '30%',

          symbolSize: 7,

          label: {
            normal: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 9
            }
          },

          leaves: {
            label: {
              normal: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            }
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    }
  }
]