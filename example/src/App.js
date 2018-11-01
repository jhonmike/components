import React, { useState } from 'react'

import { Container, Button, Row, Col, Text, Input } from 'components'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [gender, setGender] = useState('male')

  return (
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
          <Input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Text>Value: { name }</Text>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>Value: { email }</Text>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input
            type='checkbox'
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <Text>Value: { accepted ? 'true' : 'false' }</Text>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input
            type='radio'
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
            />
          <Input
            type='radio'
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
            />
          <Text>Value: { gender }</Text>
        </Col>
      </Row>
    </Container>
  );
}
