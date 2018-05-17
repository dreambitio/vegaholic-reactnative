import React, { PureComponent } from 'react'
import { Animated, View, TouchableWithoutFeedback, Text, Image, StyleSheet } from 'react-native'

export default class ViewExpanding extends PureComponent {
  static defaultProps = {
    style: {},
    headerStyle: {},
    titleStyle: {},
    contentStyle: {}
  }

  constructor (props) {
    super(props)

    this.state = {
      expanded: false,
      animation: new Animated.Value(),
      maxHeight: null,
      minHeight: null
    }

    this.toggle = this.toggle.bind(this)
    this._setMaxHeight = this._setMaxHeight.bind(this)
    this._setMinHeight = this._setMinHeight.bind(this)

    this.icons = {
      up: require('../../../assets/icons/common/arrow-up.png'),
      down: require('../../../assets/icons/common/arrow-down.png')
    }
  }

  toggle () {
    let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
      finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight

    this.setState({
      expanded: !this.state.expanded
    })

    this.state.animation.setValue(initialValue)
    Animated.spring(
      this.state.animation,
      {
        toValue: finalValue
      }
    ).start()
  }

  _setMaxHeight (event) {
    if (!this.state.maxHeight) {
      this.setState({
        maxHeight: event.nativeEvent.layout.height
      })
    }
  }

  _setMinHeight (event) {
    if (!this.state.minHeight) {
      const minHeight = event.nativeEvent.layout.height
      this.setState({
        minHeight
      })
      this.state.animation.setValue(minHeight)
    }
  }

  render () {
    const {
      style,
      headerStyle,
      title,
      titleStyle,
      contentStyle,
      children
    } = this.props

    return <Animated.View style={[styles.container, style, {height: this.state.animation}]}>
      <View onLayout={this._setMinHeight}>
        <TouchableWithoutFeedback onPress={this.toggle}>
          <View style={[styles.header, headerStyle]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Image source={this.state.expanded ? this.icons.up : this.icons.down}/>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={[styles.content, contentStyle]} onLayout={this._setMaxHeight}>
        {children}
      </View>
    </Animated.View>
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    marginRight: 30,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 16
  },

  content: {
    paddingTop: 30
  }
})
