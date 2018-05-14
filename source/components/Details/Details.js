import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'

import SectionWorkingHours from './SectionWorkingHours'

export default class Details extends PureComponent {
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
    return <View style={styles.container}>
      {this.renderWorkingHours()}
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },

  section: {
    marginBottom: 20
  }
})