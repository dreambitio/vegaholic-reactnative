import React, { PureComponent } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

import Header from './Header'
import SectionWorkingHours from './SectionWorkingHours'

export default class Details extends PureComponent {
  renderHeader () {
    const {
      id,
      photos,
      name,
      liked
    } = this.props.record

    return <Header
      id={id}
      photos={photos}
      title={name}
      liked={liked}
      goBack={this.props.navigation.goBack}
      likePlace={this.props.likePlace}
      dislikePlace={this.props.dislikePlace}
    />
  }

  renderWorkingHours () {
    const {
      hours
    } = this.props.record

    if (!hours) return null

    return <SectionWorkingHours
      style={styles.section}
      currentState={hours.isOpen ? 'Now open' : 'Closed'}
      status={hours.status}
      timeFrames={hours.timeframes}
    />
  }

  render () {
    return <ScrollView>
      {this.renderHeader()}
      <View style={styles.sectionsContainer}>
        {this.renderWorkingHours()}
      </View>
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  sectionsContainer: {
    paddingVertical: 20
  },

  section: {
    marginBottom: 20
  }
})