import React, { PureComponent } from 'react'
import { Platform, View, Image, TouchableWithoutFeedback, Linking, Text, StyleSheet } from 'react-native'

import SectionShadowContainer from '../common/SectionShadowContainer'

const Location = ({address, city, country}) => {
  const fullAddress = `${address}, ${city}, ${country}`
  const mapUrl = Platform.OS === 'ios' ? `http://maps.apple.com/?address=${fullAddress}` : `https://www.google.com/maps/search/?api=1&query=${fullAddress}`

  return <View style={[styles.rowOuterContainer, styles.rowInnerContainer]}>
    <View style={styles.rowIcon}>
      <Image source={require('../../../assets/icons/detail/contacts/marker.png')}/>
    </View>
    <Text style={styles.rowText}>{address}</Text>
    <TouchableWithoutFeedback onPress={() => Linking.openURL(mapUrl)}>
      <View style={styles.rowButton}>
        <Text style={styles.rowButtonText}>Route</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
}

const Phone = ({phone}) => <View style={styles.rowOuterContainer}>
  <TouchableWithoutFeedback onPress={() => Linking.openURL(`tel:${phone}`)}>
    <View style={styles.rowInnerContainer}>
      <View style={styles.rowIcon}>
        <Image source={require('../../../assets/icons/detail/contacts/phone.png')}/>
      </View>
      <Text style={styles.rowText}>{phone}</Text>
    </View>
  </TouchableWithoutFeedback>
</View>

const Url = ({url}) => <View style={styles.rowOuterContainer}>
  <TouchableWithoutFeedback onPress={() => Linking.openURL(url)}>
    <View style={styles.rowInnerContainer}>
      <View style={styles.rowIcon}>
        <Image source={require('../../../assets/icons/detail/contacts/chain.png')}/>
      </View>
      <Text style={styles.rowText}>{url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0]}</Text>
    </View>
  </TouchableWithoutFeedback>
</View>

export default class SectionContacts extends PureComponent {
  render () {
    const {
      style,
      location,
      phone,
      url
    } = this.props

    return <SectionShadowContainer
      style={style}
      iconColor="#7540EF"
      iconSource={require('../../../assets/icons/detail/marker.png')}
      title="Contacts"
    >
      <View style={styles.container}>
        {location && <Location
          address={location.address}
          city={location.city}
          country={location.country}
        />}
        {phone && <Phone
          phone={phone}
        />}
        {url && <Url
          url={url}
        />}
      </View>
    </SectionShadowContainer>
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: -10
  },

  rowOuterContainer: {
    paddingVertical: 15
  },

  rowInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  rowIcon: {
    marginRight: 20,
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },

  rowText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 16,
    color: '#181818'
  },

  rowButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    width: 64,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#7540EF'
  },

  rowButtonText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 13,
    color: '#7540EF'
  }
})
