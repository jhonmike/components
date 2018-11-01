import React, { useState } from 'react'

import { Container, Button, Row, Col, Text, Input } from 'components'

export default () => {
  const [ genderValue, radioInput ] =  useFormRadio('gender')
  const form = {
    textInput: useFormInput(),
    emailInput: useFormInput(),
    checkboxInput: useFormCheckBox(),
    genderValue
  }

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
          <Input type='text' { ...form.textInput } />
          <Text>Value: { form.textInput.value }</Text>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input type='email' { ...form.emailInput }/>
          <Text>Value: { form.emailInput.value }</Text>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input type='checkbox' { ...form.checkboxInput }/>
          <Text>Value: { form.checkboxInput.checked ? 'true' : 'false' }</Text>
        </Col>
        <Col xs={12} sm={4} md={3} lg={2}>
          <Input type='radio' value="male" checked={genderValue === 'male'} { ...radioInput }/>
          <Input type='radio' value="female" checked={genderValue === 'female'} { ...radioInput }/>
          <Text>Value: { form.genderValue }</Text>
        </Col>
      </Row>
    </Container>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (e) => {
      setValue(e.target.value)
    }
  }
}

function useFormCheckBox(initialChecked) {
  const [checked, setChecked] = useState(initialChecked)

  return {
    checked,
    onChange: (e) => {
      setChecked(e.target.checked)
    }
  }
}

function useFormRadio(name) {
  const [value, setValue] = useState()

  const inputProps = {
    name,
    value,
    onChange: (e) => {
      setValue(e.target.value)
    }
  }

  return [value, inputProps];
}
