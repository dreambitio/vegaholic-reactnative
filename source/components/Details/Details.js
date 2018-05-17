import React, { PureComponent } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

import Header from './Header'
import SectionWorkingHours from './SectionWorkingHours'
import SectionMenu from './SectionMenu'
import SectionTips from './SectionTips'
import SectionContacts from './SectionContacts'

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

  renderMenu () {
    const {
      hasMenu,
      menu
    } = this.props.record

    if (!hasMenu) return null

    return <SectionMenu
      style={styles.section}
      menus={menu.items}
    />
  }

  renderTips () {
    const {
      tips
    } = this.props.record

    if (!tips.length) return null

    return <SectionTips
      style={styles.section}
      tips={tips}
    />
  }

  renderContacts () {
    const {
      contact,
      location,
      url
    } = this.props.record

    return <SectionContacts
      style={styles.section}
      location={location}
      phone={contact.phone}
      url={url}
    />
  }

  render () {
    return <ScrollView>
      {this.renderHeader()}
      <View style={styles.sectionsContainer}>
        {this.renderWorkingHours()}
        {this.renderMenu()}
        {this.renderTips()}
        {this.renderContacts()}
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