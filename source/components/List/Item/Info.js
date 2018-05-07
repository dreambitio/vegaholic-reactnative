import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Info extends Component {
  render () {
    const {
      name,
      liked
    } = this.props

    return (
      <View>
        <Text>{name}</Text>
        <Text>{liked ? 'true' : 'false'}</Text>
      </View>
    )
  }
}