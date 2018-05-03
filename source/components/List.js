import React, { Component } from 'react'
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native'

import ListItem from '../containers/ListItem'

export default class List extends Component {
  componentDidMount () {
    this.props.fetchPlacesList()
  }

  renderLoader () {
    return <View style={styles.container}><ActivityIndicator
      size="large"/></View>
  }

  renderList () {
    let data = this.props.allIds.map(id => this.props.byId[id])

    return <FlatList
      style={styles.container}
      data={data}
      renderItem={({item}) => <ListItem style={styles.item} id={item.id}/>}
    />
  }

  render () {
    return this.props.allIds.length === 0 ? this.renderLoader() : this.renderList()
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  item: {
    marginBottom: 30
  }
})
