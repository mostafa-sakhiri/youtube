import React from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PropTypes from 'prop-types'

function Video({ channel, title, views, date }) {
  return (
    <StyledDivContainer type='none'>
      <VideoCover />
      <VideoBar type='none'>
        <StyledLi>
          <Account />
        </StyledLi>

        <VideoDescription>
          <span>{title}</span>
          <span>
            {channel} - {views} vues - Il y'a {date}
          </span>
        </VideoDescription>

        <StyledMoreIcon>
          <MoreVertIcon />
        </StyledMoreIcon>
      </VideoBar>
    </StyledDivContainer>
  )
}

Video.propTypes = {
  channel: PropTypes.string,
  title: PropTypes.string,
  views: PropTypes.string,
  date: PropTypes.string
}

const StyledDivContainer = styled.ul`
  margin: 0;
  padding: 10px 0 0 0;
`
const StyledLi = styled.li`
  padding: 5px 10px;
  display: flex;
`

const VideoDescription = styled(StyledLi)`
  display: flex;
  flex-direction: column;
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
