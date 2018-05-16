import React, { PureComponent } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class ViewWithBackground extends PureComponent {
  render () {
    const {
      style,
      width,
      height,
      backgroundSource,
      children
    } = this.props

    return <View style={[{width, height}]}>
      <View styles={[{width, height}, styles.absolute]}>
        <Image source={backgroundSource} style={[{width, height}]}/>
      </View>
      <View style={[style, {width, height}, styles.absolute]}>
        {children}
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  absolute: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0
  }
})