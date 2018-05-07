import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Item extends Component {
  render () {
    const {style} = this.props

    return <View style={[style, styles.container]}>
      <View style={styles.photo}/>
      <View>
        <View style={[styles.bigRow, {width: 210}]}/>
        <View style={[styles.bigRow, {width: 175}]}/>
        <View style={[styles.smallRow, {width: 220}]}/>
        <View style={[styles.smallRow, {width: 134}]}/>
      </View>
    </View>
  }
}

const placeholderColor = '#D8D8D8'

const styles = StyleSheet.create({
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