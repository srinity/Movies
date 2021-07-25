import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../../../../App/Components/Header/Header'

describe('Header Component', () => {
  it('should render title correctly', () => {
    const header = renderer.create(<Header title="Movies" />)
    expect(header).toMatchSnapshot()
  })

  it('should render back button correctly', () => {
    const header = renderer.create(<Header withBack />)
    expect(header).toMatchSnapshot()
  })

  it('should render back button with title correctly', () => {
    const header = renderer.create(<Header title="Movies" withBack />)
    expect(header).toMatchSnapshot()
  })
})
