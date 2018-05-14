import React, { PureComponent } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Slider from './Slider'

const {width} = Dimensions.get('window')
const backButtonWidth = 20, likeButton = 30
const titleWidth = width - 20 * 2 - backButtonWidth - 20 * 2 - likeButton

export default class Header extends PureComponent {
  constructor (props) {
    super(props)

    this.goBack = this.goBack.bind(this)
    this.toggleLike = this.toggleLike.bind(this)
  }

  goBack () {
    this.props.goBack()
  }

  toggleLike () {
    this.props.liked ? this.props.dislikePlace() : this.props.likePlace()
  }

  render () {
    const {
      photos,
      title,
      liked
    } = this.props

    return <View style={styles.container}>
      <Slider style={styles.slider} photos={photos}/>
      <LinearGradient
        style={styles.row}
        colors={['black', 'transparent']}
      >
        <View style={styles.backButton}>
          <TouchableWithoutFeedback onPress={this.goBack}>
            <View>
              <Image source={require('../../../assets/icons/detail/arrow-left.png')}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.likeButton}>
          <TouchableWithoutFeedback onPress={this.toggleLike}>
            <View>
              {liked ? <Image source={require('../../../assets/icons/detail/heart.png')}/> :
                <Image source={require('../../../assets/icons/detail/heart-empty.png')}/>}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </LinearGradient>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    height: 450
  },

  slider: {
    position: 'absolute'
  },

  row: {
    width,
    paddingTop: 60,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 150
  },

  backButton: {
    paddingHorizontal: 20
  },

  title: {
    width: titleWidth,
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center'
  },

  likeButton: {
    paddingHorizontal: 20
  }
})