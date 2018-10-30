import React from 'react'
import Button from '../Button'
import renderer from 'react-test-renderer'

describe('Button Component', () => {
  it('renders default component', () => {
    const tree = renderer.create(<Button>Button Default</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders primary component', () => {
    const tree = renderer
      .create(<Button theme="primary">Button Primary</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders secondary component', () => {
    const tree = renderer
      .create(<Button theme="secondary">Button Secondary</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
