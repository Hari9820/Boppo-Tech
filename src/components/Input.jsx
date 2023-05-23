import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({label, ...options}) => {
  return (
    <Form.Group className="mb-3" >
    <Form.Label>{label}</Form.Label>
    <Form.Control {...options}/>
    
  </Form.Group>
  )
}

export default Input