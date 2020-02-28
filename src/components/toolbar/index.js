import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Toolbar = ({ children }) => {
  return <StyledToolbar type='none'>{children}</StyledToolbar>
}

Toolbar.propTypes = {
  children: PropTypes.element.isRequired
}

const StyledToolbar = styled.ul`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #4f4e4e;
  background-color: #282828;
  color: white;
  display: flex;
  items-align: center;
  padding: 0;
  margin: 0 auto;
`

export default Toolbar
