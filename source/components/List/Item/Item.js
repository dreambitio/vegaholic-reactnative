import React, { Component } from 'react'
import {
  View,
  Animated,
  StyleSheet,
  PanResponder,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from 'react-native'

import Photo from '../../../containers/ListItemPhoto'
import Info from '../../../containers/ListItemInfo'

const {width} = Dimensions.get('window')

export default class ListItem extends Component {
  constructor (props) {
    super(props)

    this.gestureDelay = -35
    this.scrollViewEnabled = true

    this.state = {
      position: new Animated.ValueXY()
    }

    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) => this.handleMoveShouldSetPanResponder(event, gestureState),
      onPanResponderMove: (event, gestureState) => this.handlePanResponderMove(event, gestureState),
      onPanResponderEnd: (event, gestureState) => this.handlePanResponderEnd(event, gestureState)
    })

    this.goToPlaceScreen = this.goToPlaceScreen.bind(this)
  }

  handleMoveShouldSetPanResponder = (event, gestureState) => gestureState.dx > 0

  handlePanResponderMove = (event, gestureState) => {
    this.setScrollViewEnabled(false)
    let newX = gestureState.dx + this.gestureDelay
    this.state.position.setValue({x: newX, y: 0})
  }

  handlePanResponderEnd = (event, gestureState) => {
    if (gestureState.dx > 150)
      this.props.record.liked ? this.props.dislikePlace() : this.props.likePlace()

    Animated.timing(this.state.position, {
      toValue: {x: 0, y: 0},
      duration: 150
    }).start(() => {
      this.setScrollViewEnabled(true)
    })
  }

  setScrollViewEnabled (enabled) {
    if (this.scrollViewEnabled !== enabled) {
      this.props.setScrollEnabled(enabled)
      this.scrollViewEnabled = enabled
    }
  }

  goToPlaceScreen () {
    const {id, name} = this.props.record
    this.props.navigation.navigate('Place', {
      id,
      title: name
    })
  }

  render () {
    const {id} = this.props.record

    return <View style={styles.container}>
      <Animated.View
        style={[this.state.position.getLayout()]}
        {...this._panResponder.panHandlers}
      >
        <View style={styles.likeCell}>
          <Image source={require('../../../assets/icons/likes/heart_big.png')}/>
        </View>
        <View style={styles.itemCell}>
          <TouchableWithoutFeedback onPress={this.goToPlaceScreen}>
            <View style={{flexDirection: 'row'}}>
              <Photo id={id} style={styles.photo}/>
              <Info id={id}/>
            </View>
          </TouchableWithoutFeedback>
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