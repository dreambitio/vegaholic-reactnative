import React, { Component } from 'react'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import PlacesScreen from './screens/PlacesScreen'
import MapScreen from './screens/MapScreen'
import LikesScreen from './screens/LikesScreen'
import PlaceScreen from './screens/PlaceScreen'

const HomeScreen = TabNavigator({
  Places: {
    screen: PlacesScreen,
  },
  Map: {
    screen: MapScreen,
  },
  Likes: {
    screen: LikesScreen,
  },
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      borderTopWidth: 0,
      backgroundColor: 'white',
    },
  },
})

export default StackNavigator({
  Home: HomeScreen,
  Place: PlaceScreen,
}, {
  cardStyle: {
    backgroundColor: '#F6F6F6',
  },
})
