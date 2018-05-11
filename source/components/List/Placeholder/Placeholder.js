import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import _ from 'lodash'

const placeholderColor = '#D8D8D8'

const Item = ({style, key}) => <View style={[style, styles.container]}>
  <View style={itemStyles.photo}/>
  <View>
    <View style={[itemStyles.bigRow, {width: 210}]}/>
    <View style={[itemStyles.bigRow, {width: 175}]}/>
    <View style={[itemStyles.smallRow, {width: 220}]}/>
    <View style={[itemStyles.smallRow, {width: 134}]}/>
  </View>
</View>

const itemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  photo: {
    marginRight: 20,
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: placeholderColor
  },

  bigRow: {
    marginBottom: 13,
    height: 20,
    borderRadius: 8,
    backgroundColor: placeholderColor
  },

  smallRow: {
    marginBottom: 13,
    height: 14,
    borderRadius: 6,
    backgroundColor: placeholderColor
  }
})

export default class Placeholder extends Component {
  render () {
    return <View style={styles.container}>
      {_.times(this.props.count, index => <Item style={styles.item}
                                                key={index}/>)}
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 20
  },

  item: {
    marginVertical: 15
  }
})
