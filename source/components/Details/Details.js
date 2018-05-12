import React, { Component } from 'react'
import {View, Text} from 'react-native'

export default class Details extends Component {
  componentDidMount() {
    this.props.fetchPlace()
  }

  render() {
    return <View>
      <Text>{JSON.stringify(this.props.record)}</Text>
    </View>
  }
}