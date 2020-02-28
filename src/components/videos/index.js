import React from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function Videos() {
  return (
    <StyledDivContainer>
      <VideoCover />
      <VideoBar type='none'>
        <StyledLi>
          <Account />
        </StyledLi>

        <StyledLi>
          <span>Title</span>
          <span>Subtitle - views - date</span>
        </StyledLi>

        <StyledMoreIcon>
          <MoreVertIcon />
        </StyledMoreIcon>
      </VideoBar>
    </StyledDivContainer>
  )
}

const StyledLi = styled.li`
  padding: 5px 10px;
  display: flex;
`

const StyledMoreIcon = styled(StyledLi)`
  margin-left: auto;
`

const StyledDivContainer = styled.div`
  background-color: #282828;
  color: white;
  padding: 50px 0 10px 0;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  z-index: -1;
`

const Account = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
`

const VideoBar = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: columns;
  align-items: center;
  padding: 10px 0 0 0;
  margin: 0;
`

const VideoCover = styled.div`
  width: 100%;
  height: 200px;
  background-color: lightgray;
`

export default Videos
