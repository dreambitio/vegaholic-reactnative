import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class Photo extends Component {
  render () {
    const {style} = this.props
    const {
      previewPhoto,
      liked
    } = this.props.record

    return (
      <View style={[style, styles.container]}>
        <Image
          source={{
            uri: previewPhoto
          }}
          style={styles.image}/>
        {liked && <View style={styles.liked}>
          <Image
            source={require('../../../../assets/icons/likes/heart_small.png')}/>
        </View>}
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
  },

  liked: {
    position: 'absolute',
    left: 70
  }
})