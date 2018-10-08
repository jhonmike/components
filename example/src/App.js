import React from 'react'

import { Container, Button, Row, Col } from 'components'

export default () => (
  <React.Fragment>
    <Container>
      <Row>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Button>Button Default</Button>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Button theme="primary">Button Primary</Button>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Button theme="secondary">Button Secondary</Button>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col xsOffset={6} xs={6}>
          <Button>Button Default</Button>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)
