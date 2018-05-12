import React, { Component } from 'react'

import Details from '../containers/Details'

export default class PlaceScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {title} = navigation.state.params

    return {
      title: title ? title : 'Place'
    }
  }

  render () {
    const {id} = this.props.navigation.state.params

    return <Details id={id}/>
  }
}
