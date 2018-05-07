import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Star = ({style, type}) => {
  let star

  switch (type) {
    case 'full':
      star =
        <Image source={require('../../../../assets/icons/rating/star_full.png')}/>
      break
    case 'half':
      star =
        <Image source={require('../../../../assets/icons/rating/star_half.png')}/>
      break
    case 'empty':
    default:
      star =
        <Image source={require('../../../../assets/icons/rating/star_empty.png')}/>
  }

  return <View style={style}>{star}</View>
}

const Stars = ({value}) => {
  let stars = []

  for (let i = 1; i <= 5; i++) {
    let type
    if (value >= 1) {
      type = 'full'
    } else if (value === 0.5) {
      type = 'half'
    } else {
      type = 'empty'
    }

    stars.push(type)
    value--
  }

  return <View style={starsStyles.container}>
    {stars.map((star_type, index) => <Star key={index} style={starsStyles.star}
                                           type={star_type}/>)}
  </View>
}

const starsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  star: {
    marginRight: 4
  }
})

export default class Rating extends Component {

  render () {
    const {style, value} = this.props
    return <View style={[style, styles.container]}>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
      <Stars value={value}/>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  valueContainer: {
    marginRight: 10
  },

  value: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#EBA726'
  }
})
