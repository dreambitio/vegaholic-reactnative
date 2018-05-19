import React, { PureComponent } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'

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
    const {photos} = this.props

    return <Swiper style={styles.container} paginationStyle={styles.pagination} dot={<Dot/>} activeDot={<ActiveDot/>}>
      {photos.map((photoUrl, index) => <View key={index} style={styles.slide}>
        <Image source={{
          uri: photoUrl
        }} style={styles.photo}/>
        <LinearGradient style={styles.top} colors={['black', 'transparent']}/>
        <LinearGradient style={styles.bottom} colors={['transparent', 'black']}/>
      </View>)}
    </Swiper>
  }
}

const styles = StyleSheet.create({
  container: {
    height: 450
  },

  pagination: {
    justifyContent: 'flex-end',
    paddingRight: 20
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
  },

  top: {
    position: 'absolute',
    top: 0,
    width,
    height: 150
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    width,
    height: 75
  }
})
