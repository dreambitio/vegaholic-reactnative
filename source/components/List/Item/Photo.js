import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class Photo extends Component {
  render () {
    const {
      style,
      uri
    } = this.props

    return (
      <View style={[style, styles.container]}>
        <Image
          source={{
            uri: uri
          }}
          style={styles.image}/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90
  },

  image: {
    borderRadius: 20,
    width: 90,
    height: 90
  }
})