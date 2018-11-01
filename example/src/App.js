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
          <label>
              Name:
            <Input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <Text style={{marginTop: '5px'}}>StateValue: { name }</Text>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <label>
            Email:
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <Text style={{marginTop: '5px'}}>StateValue: { email }</Text>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <label>
            <Input
              type='checkbox'
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            Accepted
          </label>
          <Text style={{marginTop: '5px'}}>StateValue: { accepted ? 'true' : 'false' }</Text>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <label>
            <Input
              type='radio'
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
          <label>
            <Input
              type='radio'
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          <Text style={{marginTop: '5px'}}>StateValue: { gender }</Text>
        </Col>
      </Row>
    </Container>
  );
}
