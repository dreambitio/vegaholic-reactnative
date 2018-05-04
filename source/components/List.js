import React, { Component } from 'react'
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native'

import ListItem from '../containers/ListItem'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.setScrollEnabled = this.setScrollEnabled.bind(this)

    this.state = {
      enable: true
    }
  }

  setScrollEnabled (enable) {
    this.setState({
      enable
    })
  }

  componentDidMount () {
    this.props.fetchPlacesList()
  }

  renderLoader () {
    return <View style={styles.container}><ActivityIndicator
      size="large"/></View>
  }

  renderItem (item) {
    return <ListItem
      id={item.id}
      setScrollEnabled={enable => this.setScrollEnabled(enable)}
    />
  }

  renderList () {
    let data = this.props.allIds.map(id => this.props.byId[id])

    return <FlatList
      style={styles.container}
      data={data}
      renderItem={({item}) => this.renderItem(item)}
      scrollEnabled={this.state.enable}
    />
  }

  render () {
    return this.props.allIds.length === 0 ? this.renderLoader() : this.renderList()
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5
  }
})
