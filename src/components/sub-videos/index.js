import React from 'react'
import styled from 'styled-components'
import SubVideo from '../sub-video/index'

function SubVideos({ history }) {
  const videos = JSON.parse(localStorage.getItem('youtubeSession'))

  const goToVideo = videoId => {
    history.push(`/video/${videoId}`)
  }

  return (
    <StyledDivContainer>
      {videos.map(({ id, channel, title, views, date }, i) => (
        <SubVideo
          key={i}
          channel={channel}
          title={title}
          views={views}
          date={date}
          onGoToVideo={() => goToVideo(id)}
        />
      ))}
    </StyledDivContainer>
  )
}

const StyledDivContainer = styled.div`
  background-color: #282828;
  color: white;
  display: flex;
  flex-direction: column;
`

export default SubVideos
