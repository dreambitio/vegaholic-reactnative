import React, { PureComponent } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

import Slider from './Slider'
import Rating from '../../common/Rating'

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
      liked,
      rating
    } = this.props

    return <View style={styles.container}>
      <Slider photos={photos}/>
      <View style={styles.top}>
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
      </View>
      {rating && <View style={styles.bottom}>
        <Rating value={rating}/>
      </View>}
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

  top: {
    width,
    paddingTop: 60,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150
  },

  backButton: {
    paddingHorizontal: 20
  },

  title: {
    width: titleWidth,
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  likeButton: {
    paddingHorizontal: 20
  },

  bottom: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    width,
    height: 75,
    paddingHorizontal: 20
  }
})