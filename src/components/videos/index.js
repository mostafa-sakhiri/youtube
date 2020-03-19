import React from 'react'
import styled from 'styled-components'
import Video from '../video/index'

function Videos({ history }) {
  const videos = JSON.parse(localStorage.getItem('youtubeSession'))

  const goToVideo = videoId => {
    history.push(`/video/${videoId}`)
  }

  return (
    <StyledDivContainer>
      {videos.map(({ id, uid, channel, title, views, date }, i) => (
        <Video
          key={i}
          uid={uid}
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
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  z-index: -1;
`

export default Videos
