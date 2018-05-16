import React, { PureComponent } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import moment from 'moment'

import SectionScrollable from '../common/SectionScrollable'
import ShadowContainer from '../../common/ShadowContainer'

export default class SectionTips extends PureComponent {
  render () {
    const {
      style,
      tips
    } = this.props

    return <SectionScrollable
      style={style}
      iconColor="#26265E"
      iconSource={require('../../../assets/icons/detail/light.png')}
      title="Tips"
    >
      {tips.map(tip => <ShadowContainer style={styles.container}>
        <View style={styles.header}>
          <View style={styles.photoContainer}>
            <Image source={{uri: tip.user.photo}} style={styles.photo}/>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{tip.user.firstName}</Text>
            <Text style={styles.date}>{moment.unix(tip.createdAt).utc().format('DD MMMM YY')}</Text>
          </View>
        </View>
        <Text style={styles.text}>{tip.text}</Text>
      </ShadowContainer>)}
    </SectionScrollable>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 260,
    padding: 20
  },

  header: {
    flexDirection: 'row',
    marginBottom: 10
  },

  photoContainer: {
    backgroundColor: 'white',
    marginRight: 20,
    width: 34,
    height: 34,
    borderRadius: 17,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 8
  },

  photo: {
    width: 34,
    height: 34,
    borderRadius: 17
  },

  name: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: 'black',
    fontSize: 16
  },

  date: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#9999A0',
    fontSize: 12
  },

  text: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#9999A0',
    fontSize: 13
  }
})
