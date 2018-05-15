import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'

import Section from '../Section'
import ShadowContainer from '../../../common/ShadowContainer'

export default class SectionShadowContainer extends PureComponent {
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
      <ShadowContainer style={styles.container}>
        {children}
      </ShadowContainer>
    </Section>
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20
  }
})