import React from 'react'
import renderer from 'react-test-renderer'
import Row from '../Row'

describe('Row Component', () => {
  it('renders component', () => {
    const tree = renderer
      .create(<Row>Row</Row>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
