import React from 'react'
import renderer from 'react-test-renderer'
import Col from '../Col'

describe('Col Component', () => {
  it('renders responsive component', () => {
    const tree = renderer
      .create(
        <Col xs={12} sm={4} md={3} lg={2}>
          Col
        </Col>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders col with offset', () => {
    const tree = renderer.create(<Col xsOffset={6} xs={6} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders col with auto with', () => {
    const tree = renderer.create(<Col md />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
