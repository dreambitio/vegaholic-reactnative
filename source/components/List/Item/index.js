import React, { Component } from 'react'
import {
  View,
  Animated,
  StyleSheet,
  PanResponder,
  Dimensions,
  Image
} from 'react-native'

import Photo from './Photo'
import Info from '../../../containers/ListItem/Info'

const {width} = Dimensions.get('window')

export default class ListItem extends Component {
  constructor (props) {
    super(props)

    this.gestureDelay = -35
    this.scrollViewEnabled = true

    const position = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 35) {
          this.setScrollViewEnabled(false)
          let newX = gestureState.dx + this.gestureDelay
          position.setValue({x: newX, y: 0})
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 150)
          this.props.likePlace()

        Animated.timing(this.state.position, {
          toValue: {x: 0, y: 0},
          duration: 150
        }).start(() => {
          this.setScrollViewEnabled(true)
        })
      }
    })

    this.panResponder = panResponder
    this.state = {position}
  }

  setScrollViewEnabled (enabled) {
    if (this.scrollViewEnabled !== enabled) {
      this.props.setScrollEnabled(enabled)
      this.scrollViewEnabled = enabled
    }
  }

  render () {
    const {
      id,
      previewPhoto
    } = this.props.record

    return <View style={styles.container}>
      <Animated.View
        style={[this.state.position.getLayout()]}
        {...this.panResponder.panHandlers}
      >
        <View style={styles.likeCell}>
          <Image source={require('../../../assets/icons/likes/heart_big.png')}/>
        </View>
        <View style={styles.itemCell}>
          <Photo style={styles.photo} uri={previewPhoto}/>
          <Info id={id}/>
        </View>
      </Animated.View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -100
  },

  likeCell: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemCell: {
    flexDirection: 'row',
    width: width,
    marginLeft: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    minHeight: 90
  },

  photo: {
    marginRight: 20
  }
})