import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

export default class ShadowContainer extends PureComponent {
  render () {
    const {
      style,
      children
    } = this.props

    return <View style={[style, styles.container]}>
      {children}
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.09,
    shadowRadius: 20
  }
})