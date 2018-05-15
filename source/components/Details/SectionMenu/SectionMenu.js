import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SectionScrollable from '../common/SectionScrollable'
import ShadowContainer from '../../common/ShadowContainer'

export default class SectionMenu extends PureComponent {
  render () {
    const {
      style,
      menus
    } = this.props

    return <SectionScrollable
      style={style}
      iconColor="#2DC86D"
      iconSource={require('../../../assets/icons/detail/tray.png')}
      title="Menu"
    >
      {menus.map(menu => <ShadowContainer style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{menu.name}</Text>
          <View style={styles.count}>
            <Text style={styles.countText}>{menu.entries.count}</Text>
          </View>
        </View>
        <Text style={styles.description}>{menu.description}</Text>
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
    justifyContent: 'space-between',
    marginBottom: 10
  },

  name: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: 'black',
    fontSize: 16
  },

  count: {
    backgroundColor: '#2DC86D',
    paddingHorizontal: 3
  },

  countText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: 'white',
    fontSize: 14
  },

  description: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: 'black',
    fontSize: 14
  }
})