import React from 'react'

import { Container, Button, Row } from 'components'

export default () => (
  <React.Fragment>
    <Container>
      <Row>
        <Button>Button Default</Button>
      </Row>
      <Row>
        <Button theme="primary">Button Primary</Button>
      </Row>
      <Row>
        <Button theme="secondary">Button Secondary</Button>
      </Row>
    </Container>
    <Container fluid>
      <Button>Button Default</Button>
    </Container>
  </React.Fragment>
)
