// @flow

import React from 'react'

type PropTypes = {
  label: string,
  text: string,
  type: string,
  id: string,
  value: string,
  handleChange: any
}

const Input = ({ label, text, type, id, value, handleChange }: PropTypes) => (
  <div className='form-group'>
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className='form-control'
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
)

export default Input
