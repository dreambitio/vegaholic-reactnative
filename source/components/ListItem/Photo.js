import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class Photo extends Component {
  constructor (props) {
    super(props)
    this.state = {loaded: false}
    this.onLoad = this.onLoad.bind(this)
  }

  componentDidMount () {
    this.props.fetchPlacePhotos()
  }

  onLoad () {
    // This only exists so the transition can be seen
    // if loaded too quickly.
    setTimeout(() => {
      this.setState(() => ({loaded: true}))
    }, 1000)
  }

  render () {
    const {style} = this.props
    const {photoPreview} = this.props.record

    return (
      <View
        style={[style, styles.container]}>

        {photoPreview &&
        <Image
          source={{
            uri: photoPreview
          }}
          style={styles.image}
          onLoad={this.onLoad}/>
        }

        {!this.state.loaded &&
        <View
          style={styles.placeholder}/>
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
    position: 'absolute',
    borderRadius: 20,
    width: 90,
    height: 90
  },

  placeholder: {
    position: 'absolute',
    width: 90,
    height: 90,
    backgroundColor: '#90a4ae',
    borderRadius: 20
  }
})