import React from 'react'
import { Text, View } from 'react-native'
import renderer from 'react-test-renderer'

import BadgeList from '../../../../App/Components/BadgeList/BadgeList'

describe('BadgeList Component', () => {
  const data = [
    {
      name: 'Actions',
      id: 1
    },
    {
      name: 'Animation',
      id: 2
    }
  ]

  it('should render correctly', () => {
    const badgeList = renderer.create(<BadgeList data={data} />)
    expect(badgeList).toMatchSnapshot()
  })

  it('should be able to customize itemTextStyle correctly', () => {
    const textStyle = {
      color: '#e23478'
    }

    const badgeList = renderer.create(
      <BadgeList data={data} itemTextStyle={textStyle} />
    )
    expect(badgeList).toMatchSnapshot()

    expect(badgeList.root.findAllByType(Text)[0].props.style[1]).toBe(textStyle)
  })

  it('should be able to customize itemStyle correctly', () => {
    const style = {
      backgroundColor: '#e23478'
    }

    const badgeList = renderer.create(
      <BadgeList data={data} itemStyle={style} />
    )
    expect(badgeList).toMatchSnapshot()

    expect(badgeList.root.findAllByType(View)[1].props.style[1]).toBe(style)
  })

  it('should be able to customize containerStyle correctly', () => {
    const style = {
      backgroundColor: '#e23478'
    }

    const badgeList = renderer.create(
      <BadgeList data={data} containerStyle={style} />
    )
    expect(badgeList).toMatchSnapshot()

    expect(badgeList.root.findByType(View).props.style[1]).toBe(style)
  })
})
