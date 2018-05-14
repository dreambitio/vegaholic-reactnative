import React, { Component } from 'react'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { Image, StatusBar } from 'react-native'

import { screenNavigationOptions } from './services/navigation'

import PlacesScreen from './screens/PlacesScreen'
import MapScreen from './screens/MapScreen'
import LikesScreen from './screens/LikesScreen'
import PlaceScreen from './screens/PlaceScreen'

StatusBar.setBarStyle('light-content')

const HomeScreen = TabNavigator({
  Places: {
    screen: PlacesScreen,
    navigationOptions: screenNavigationOptions({
      title: 'Places',
      headerBackgroundColor: '#19B05C',
      tabBarIcon: <Image
        source={require('./assets/icons/tab_bar/leaf.png')}/>
    })
  },
  Map: {
    screen: MapScreen,
    navigationOptions: screenNavigationOptions({
      title: 'Near Me',
      headerBackgroundColor: '#09ADEF',
      tabBarIcon: <Image
        source={require('./assets/icons/tab_bar/marker.png')}/>
    })
  },
  Likes: {
    screen: LikesScreen,
    navigationOptions: screenNavigationOptions({
      title: 'Likes',
      headerBackgroundColor: '#ED4956',
      tabBarIcon: <Image
        source={require('./assets/icons/tab_bar/heart.png')}/>
    })
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      borderTopWidth: 0,
      backgroundColor: 'white'
    }
  }
})

export default StackNavigator({
  Home: HomeScreen,
  Place: PlaceScreen
}, {
  cardStyle: {
    backgroundColor: '#F6F6F6'
  },
  headerMode: 'screen'
})
