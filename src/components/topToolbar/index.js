import React from 'react'
import styled from 'styled-components'
import VideocamIcon from '@material-ui/icons/Videocam'
import SearchIcon from '@material-ui/icons/Search'
import YouTubeIcon from '@material-ui/icons/YouTube'

function TopToolbar() {
  return (
    <StyledToolbar>
      <StyledLogo>
        <YouTubeIcon color='secondary' fontSize='large' />
      </StyledLogo>

      <StyledDiv>
        <StyledLi>
          <VideocamIcon fontSize='medium' />
        </StyledLi>

        <StyledLi>
          <SearchIcon fontSize='medium' />
        </StyledLi>

        <StyledLi>
          <Account />
        </StyledLi>
      </StyledDiv>
    </StyledToolbar>
  )
}

const StyledToolbar = styled.ul`
  box-shadow: 2px 2px 3px black;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #282828;
  color: white;
  display: flex;
  items-align: center;
  padding: 0;
  margin: 0 auto;
`

const StyledLi = styled.li`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`

const StyledDiv = styled.div`
  display: flex;
  margin-left: auto;
`

const StyledLogo = styled(StyledLi)`
  font-size: 14px;
`
const Account = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
`

export default TopToolbar
