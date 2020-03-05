import React from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PropTypes from 'prop-types'

function SubVideo({ channel, title, views, onGoToVideo }) {
  return (
    <StyledDivContainer type='none'>
      <VideoCover onClick={onGoToVideo} />
      <VideoContent type='none'>
        <VideoDescription>
          <StyledTitle>{title}</StyledTitle>
          <StyledChannel>{channel}</StyledChannel>
          <StyledViewsStatus>{views} de vues</StyledViewsStatus>
        </VideoDescription>

        <StyledMoreIcon>
          <MoreVertIcon style={{ fontSize: '18px', color: 'gray' }} />
        </StyledMoreIcon>
      </VideoContent>
    </StyledDivContainer>
  )
}

SubVideo.propTypes = {
  channel: PropTypes.string,
  title: PropTypes.string,
  views: PropTypes.string,
  date: PropTypes.string,
  onGoToVideo: PropTypes.func
}

const StyledDivContainer = styled.ul`
  margin: 0;
  padding: 10px 0 0 20px;
  display: flex;
  flex-direction: row;
`
const StyledLi = styled.li`
  padding: 5px 10px;
  display: flex;
`

const VideoDescription = styled(StyledLi)`
  display: flex;
  flex-direction: column;
`

const StyledTitle = styled.span`
  font-size: 16px;
`
const StyledChannel = styled.span`
  font-size: 12px;
  color: gray;
`

const StyledViewsStatus = styled.span`
  color: gray;
`

const StyledMoreIcon = styled(StyledLi)`
  font-size: 12px;
  margin-left: auto;
`

const VideoContent = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: columns;
  padding: 0;
  margin: 0;
`

const VideoCover = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightgray;
`

export default SubVideo
