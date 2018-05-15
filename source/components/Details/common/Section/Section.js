import React, { PureComponent } from 'react'
import { View, TouchableWithoutFeedback, Image, Text, StyleSheet } from 'react-native'

export default class Section extends PureComponent {
  constructor (props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    const {handlePress} = this.props

    if (handlePress) handlePress()
  }

  render () {
    const {
      style,
      iconColor,
      iconSource,
      title,
      children
    } = this.props

    return <View style={[style, styles.container]}>
      <View>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.header}>
            <View style={[{backgroundColor: iconColor}, styles.icon]}>
              <Image source={iconSource}/>
            </View>

            <Text style={styles.title}>{title.toUpperCase()}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {children}
    </View>
  }
}

const styles = StyleSheet.create({
  container: {},

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10
  },

  icon: {
    marginRight: 10,
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#9999A0'
  }
})