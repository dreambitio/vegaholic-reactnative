import React, { PureComponent } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import SectionScrollable from '../common/SectionScrollable'
import ShadowContainer from '../../common/ShadowContainer'
import ViewWithBackground from '../../common/ViewWithBackground'

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
      {menus.map((menu, index) => <ShadowContainer key={index} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{menu.name}</Text>
          <ViewWithBackground backgroundSource={require('../../../assets/icons/detail/menu.png')} style={styles.count} width={16} height={18}>
            <Text style={styles.countText}>{menu.entries.count}</Text>
          </ViewWithBackground>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 3
  },

  countText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12
  },

  description: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#9999A0',
    fontSize: 13
  }
})