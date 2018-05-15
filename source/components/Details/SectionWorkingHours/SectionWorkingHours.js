import React, { PureComponent } from 'react'
import { Image, View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import Section from '../common/Section'
import ShadowContainer from '../../common/ShadowContainer'

export default class SectionWorkingHours extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      timeFramesVisible: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      timeFramesVisible: !this.state.timeFramesVisible
    })
  }

  render () {
    const {
      style,
      currentState,
      status,
      timeFrames
    } = this.props

    return <Section
      style={style}
      iconColor="#787892"
      iconSource={require('../../../assets/icons/detail/clock.png')}
      title="Working hours"
    >
      <View style={styles.outerContainer}>
        <ShadowContainer style={styles.innerContainer}>
          <Text style={[styles.font, styles.currentStateText]}>{currentState}</Text>
          <TouchableWithoutFeedback onPress={this.toggle}>
            <View style={styles.status}>
              <Text style={[styles.font, styles.statusText]}>{status}</Text>
              {this.state.timeFramesVisible ? <Image source={require('../../../assets/icons/detail/arrow-up.png')}/> :
                <Image source={require('../../../assets/icons/detail/arrow-down.png')}/>}
            </View>
          </TouchableWithoutFeedback>
          {this.state.timeFramesVisible && <View style={styles.timeFrames}>
            {timeFrames.map(timeFrame => <View style={styles.timeFrame}>
              <Text style={styles.font}>{timeFrame.days}</Text>
              <Text style={styles.font}>{timeFrame.open[0].renderedTime}</Text>
            </View>)}
          </View>}
        </ShadowContainer>
      </View>
    </Section>
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 10
  },

  innerContainer: {
    padding: 20
  },

  font: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 14
  },

  currentStateText: {
    marginBottom: 10,
    fontSize: 16,
    color: '#EBA726'
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  statusText: {
    marginRight: 30,
    fontSize: 16
  },

  timeFrames: {
    paddingTop: 30
  },

  timeFrame: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
})