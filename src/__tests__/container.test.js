import React from 'react'
import renderer from 'react-test-renderer'
import Container from '../Container'

describe('Container Component', () => {
  it('renders component', () => {
    const tree = renderer
      .create(<Container>Container</Container>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders fluid container component', () => {
    const tree = renderer
      .create(<Container fluid>Container Fluid</Container>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
