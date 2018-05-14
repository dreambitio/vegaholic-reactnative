import React, { Component } from 'react'

import Details from '../containers/Details'
import DetailsHeader from '../containers/DetailsHeader'

export default class PlaceScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {id} = navigation.state.params

    return {
      header: <DetailsHeader id={id} goBack={navigation.goBack}/>
    }
  }

  render () {
    const {id} = this.props.navigation.state.params

    return <Details id={id}/>
  }
}
