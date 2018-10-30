import React from 'react'

import { Container, Button, Row, Col, Text, Input } from 'components'

export default () => (
  <React.Fragment>
    <Container>
      <Row>
        <Col xs>
          <Text tagName='h1'>Buttons</Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Button>Button Default</Button>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Button theme='primary'>Button Primary</Button>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Button theme='secondary'>Button Secondary</Button>
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Text tagName='h1'>Inputs</Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input type='text' />
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input type='email' />
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input type='checkbox' />
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input type='radio' />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)
