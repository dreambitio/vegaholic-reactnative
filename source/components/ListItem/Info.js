import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {loaded: this.props.record.readyToRender}
    this.onLoad = this.onLoad.bind(this)
  }

  componentDidMount () {
    this.props.fetchPlace()
  }

  onLoad () {
    // This only exists so the transition can be seen
    // if loaded too quickly.
    setTimeout(() => {
      this.setState(() => ({loaded: true}))
    }, 1000)
  }

  renderPlaceholder () {
    return <View style={styles.placeholder}>
      <View style={styles.placeholderTitle}/>
      <View style={styles.placeholderLine}/>
      <View style={styles.placeholderLine}/>
      <View style={styles.placeholderLine}/>
      <View style={styles.placeholderLine}/>
    </View>
  }

  renderRecord () {
    const {
      name,
      liked
    } = this.props.record

    return <View>
      <Text>{name}</Text>
      <Text>{liked ? 'true' : 'false'}</Text>
    </View>
  }

  render () {
    const {style} = this.props
    const {
      readyToRender
    } = this.props.record

    if (!this.state.loaded && readyToRender) this.onLoad()

    return (
      <View
        style={[style, styles.container]}>
        {this.state.loaded ? this.renderRecord() : this.renderPlaceholder()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  placeholder: {
    height: 115
  },

  placeholderTitle: {
    marginBottom: 15,
    width: 190,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#90a4ae'
  },

  placeholderLine: {
    marginBottom: 10,
    width: 220,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#90a4ae'
  }
})