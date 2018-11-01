import React from 'react'
import renderer from 'react-test-renderer'
import Input from '../Input'

describe('Input Component', () => {
  it('renders text component', () => {
    const tree = renderer.create(<Input type="text" value={''} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders email component', () => {
    const tree = renderer.create(<Input type="email" value={''} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders checkbox component', () => {
    const tree = renderer.create(<Input type="checkbox" checkbox={false} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders radio component', () => {
    const tree = renderer.create(<Input type="radio" name="gender" value="male" checked={true} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
