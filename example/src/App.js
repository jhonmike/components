import React from 'react'

import { Container, Button } from 'components'

export default () => (
  <React.Fragment>
    <Container>
      <Button>Button Default</Button>
      <br />
      <Button theme="primary">Button Primary</Button>
      <br />
      <Button theme="secondary">Button Secondary</Button>
    </Container>
    <Container fluid>
      <Button>Button Default</Button>
    </Container>
  </React.Fragment>
)
