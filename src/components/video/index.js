import React from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function Video() {
  return (
    <StyledDivContainer type='none'>
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

const StyledDivContainer = styled.ul`
  margin: 0;
  padding: 10px 0 0 0;
`
const StyledLi = styled.li`
  padding: 5px 10px;
  display: flex;
`

const StyledMoreIcon = styled(StyledLi)`
  margin-left: auto;
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

export default Video
