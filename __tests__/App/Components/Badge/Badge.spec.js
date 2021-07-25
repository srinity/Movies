import React from 'react'
import { Text, View } from 'react-native'
import renderer from 'react-test-renderer'

import Badge from '../../../../App/Components/Badge/Badge'

describe('Badge Component', () => {
  it('should render correctly', () => {
    const badge = renderer.create(<Badge name="Action" />)
    expect(badge).toMatchSnapshot()
  })

  it('should be able to customize textStyle correctly', () => {
    const textStyle = {
      color: '#e23478'
    }

    const badge = renderer.create(<Badge name="Action" textStyle={textStyle} />)
    expect(badge).toMatchSnapshot()

    expect(badge.root.findByType(Text).props.style[1]).toBe(textStyle)
  })

  it('should be able to customize style correctly', () => {
    const style = {
      backgroundColor: '#e23478'
    }

    const badge = renderer.create(<Badge name="Action" style={style} />)
    expect(badge).toMatchSnapshot()

    expect(badge.root.findByType(View).props.style[1]).toBe(style)
  })
})
