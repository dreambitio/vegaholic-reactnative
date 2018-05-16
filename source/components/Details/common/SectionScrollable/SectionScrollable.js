import React, { PureComponent } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

import Section from '../Section'

export default class SectionScrollable extends PureComponent {
  render () {
    const {
      style,
      iconColor,
      iconSource,
      title,
      children
    } = this.props

    return <Section
      style={style}
      iconColor={iconColor}
      iconSource={iconSource}
      title={title}
    >
      <ScrollView horizontal={true} style={styles.container}>
        {children.map((child, index) => <View key={index} style={styles.item}>{child}</View>)}
        <View style={styles.empty}/>
      </ScrollView>
    </Section>
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'visible'
  },

  empty: {
    width: 10
  },

  item: {
    marginLeft: 10
  }
})