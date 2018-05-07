import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import _ from 'lodash'

import Item from './Item'

export default class Placeholder extends Component {
  render () {
    return <View style={styles.container}>
      {_.times(this.props.count, index => <Item style={styles.item} key={index}/>)}
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