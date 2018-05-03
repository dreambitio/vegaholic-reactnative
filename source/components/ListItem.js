import React, { Component } from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native'

export default class ListItem extends Component {
  componentDidMount () {
    this.props.fetchPlace()
  }

  renderLoader () {
    return <ActivityIndicator/>
  }

  renderRecord () {
    const {
      id,
      name
    } = this.props.record

    return <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  }

  render () {
    return <View style={this.props.style}>
      {this.props.record.readyToRender ? this.renderRecord() : this.renderLoader() }
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})