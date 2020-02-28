import React from 'react'
import styled from 'styled-components'
import Video from '../video/index'

function Videos() {
  return (
    <StyledDivContainer>
      <Video />
      <Video />
      <Video />
      <Video />
    </StyledDivContainer>
  )
}

const StyledDivContainer = styled.div`
  background-color: #282828;
  color: white;
  padding: 50px 0 10px 0;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  z-index: -1;
`

export default Videos
