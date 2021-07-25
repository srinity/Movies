import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from '../../../../App/Components/Avatar/Avatar'

describe('Avatar Component', () => {
  it('should render correctly', () => {
    const avatar = renderer.create(
      <Avatar
        image="https://www.themoviedb.org/t/p/w1280/rmIYKVdYT60zfsqfjNuB71f1y82.jpg"
        name="LeBron James"
      />
    )
    expect(avatar).toMatchSnapshot()
  })
})
