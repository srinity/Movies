import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Label from '../../../../App/Components/Label/Label'

describe('Label Component', () => {
  it('should render correctly', () => {
    const label = renderer.create(<Label title="testTitle" />)
    expect(label).toMatchSnapshot()
  })

  it('should invoke onPress correctly', () => {
    const onPress = jest.fn()

    const label = shallow(<Label title="testTitle" onPress={onPress} />)
    label.simulate('press')
    expect(onPress).toHaveBeenCalled()
  })
})
