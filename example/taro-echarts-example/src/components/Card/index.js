import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Card extends Component {

  render() {
    const { title } = this.props
    return (
      <View className='card'>
        <View className='card__title'>{title}</View>
        <View className='card__content'>
          {this.props.children}
        </View>
      </View>
    )
  }
}

Card.defaultProps = {
  title: ''
}
