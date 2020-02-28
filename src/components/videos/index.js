import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'

function Videos() {
  return (
    <StyledDiv>
      <StyledLi>
        <Account />
      </StyledLi>

      <StyledLi>
        <span>Title</span>
        <span>Subtitle - views - date</span>
      </StyledLi>

      <StyledLi>
        <SearchIcon />
      </StyledLi>
    </StyledDiv>
  )
}

const StyledLi = styled.li`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`

const StyledDiv = styled.div`
  background-color: #282828;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px 0;
  display: flex;
  margin-left: auto;
  z-index: -1;
`

const Account = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
`

export default Videos
