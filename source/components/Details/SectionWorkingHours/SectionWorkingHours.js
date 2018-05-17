import React, { PureComponent } from 'react'
import { Image, View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import SectionShadowContainer from '../common/SectionShadowContainer'
import ViewExpanding from '../../common/ViewExpanding'

export default class SectionWorkingHours extends PureComponent {
  render () {
    const {
      style,
      currentState,
      status,
      timeFrames
    } = this.props

    return <SectionShadowContainer
      style={style}
      iconColor="#787892"
      iconSource={require('../../../assets/icons/detail/clock.png')}
      title="Working hours"
    >
      <Text style={styles.currentState}>{currentState}</Text>
      <ViewExpanding
        title={status}
      >
        {timeFrames.map((timeFrame, index) => <View key={index} style={styles.timeFrame}>
          <Text style={styles.timeFrameText}>{timeFrame.days}</Text>
          <Text style={styles.timeFrameText}>{timeFrame.open[0].renderedTime}</Text>
        </View>)}
      </ViewExpanding>
    </SectionShadowContainer>
  }
}

const styles = StyleSheet.create({
  currentState: {
    marginBottom: 10,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#EBA726'
  },

  timeFrame: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  timeFrameText: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: 'black',
    fontSize: 14
  }
})
