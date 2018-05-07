import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Rating from './Rating'

const InfoRow = ({style, type, text}) => <View
  style={[style, infoRowStyles.container]}>
  <View style={infoRowStyles.icon}>
    { type === 'address' &&
    <Image source={require('../../../../assets/icons/place_info/marker.png')}/>}
    { type === 'status' &&
    <Image source={require('../../../../assets/icons/place_info/clock.png')}/>}
  </View>
  <Text style={infoRowStyles.text}>{text}</Text>
</View>

const infoRowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  icon: {
    width: 15,
    marginRight: 15,
    alignItems: 'center'
  },

  text: {
    color: '#9999A0',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 14
  }
})

export default class Info extends Component {
  render () {
    const {
      name,
      rating,
      location,
      hours
    } = this.props.record

    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        {rating && <Rating style={styles.rating} value={rating}/>}
        {location && <InfoRow style={{marginBottom: 10}} type='address'
                              text={location.address}/>}
        {hours && <InfoRow type='status' text={hours.status}/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { // Hack for line wrapping
    width: 0,
    flexGrow: 1
  },

  nameContainer: {
    marginBottom: 12
  },

  name: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 22
  },

  rating: {
    marginBottom: 10
  }
})
