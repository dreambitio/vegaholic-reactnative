import React, { PureComponent } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

const Dot = () => <View style={{
  backgroundColor: 'transparent',
  width: 8,
  height: 8,
  borderRadius: 4,
  margin: 5,
  borderColor: 'white',
  borderWidth: 2
}}/>

const ActiveDot = () => <View style={{
  backgroundColor: 'white',
  width: 8,
  height: 8,
  borderRadius: 4,
  margin: 5
}}/>

export default class Slider extends PureComponent {
  render () {
    const {style, photos} = this.props

    return <Swiper style={[style, styles.container]} dot={<Dot/>} activeDot={<ActiveDot/>}>
      {photos.map(photoUrl => <View style={styles.slide}>
        <Image source={{
          uri: photoUrl
        }} style={styles.photo}/>
      </View>)}
    </Swiper>
  }
}

const styles = StyleSheet.create({
  container: {
    height: 450
  },

  slide: {
    flex: 1,
    width,
    height: 450,
    justifyContent: 'center',
    alignItems: 'center'
  },

  photo: {
    width,
    height: 450
  }
})
