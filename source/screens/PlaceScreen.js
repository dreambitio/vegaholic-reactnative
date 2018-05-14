import React, { Component } from 'react'

import Details from '../containers/Details'

export default class PlaceScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {id} = navigation.state.params

    return {
      header: null
    }
  }

  render () {
    const {id} = this.props.navigation.state.params

    return <Details id={id}/>
  }
}
