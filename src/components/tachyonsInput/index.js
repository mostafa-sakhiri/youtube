import React from 'react'
import PropTypes from 'prop-types'

const TachyonsInput = ({ type, value, placeholder }) => {
  return <input type={type} value={value} placeholder={placeholder} />
}

TachyonsInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
}

export default TachyonsInput
