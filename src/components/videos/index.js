import React from 'react'
import styled from 'styled-components'
import Video from '../video/index'

function Videos() {
  const videos = [
    {
      channel: 'Evanscence',
      title: 'Lithium',
      views: '900 M',
      date: '6 ans'
    },
    {
      channel: 'Evanscence',
      title: 'Going under',
      views: '600 M',
      date: '6 ans'
    },
    {
      channel: 'Evanscence',
      title: 'The change',
      views: '400 M',
      date: '6 ans'
    },
    {
      channel: 'Linkin park',
      title: 'Crawling',
      views: '100 M',
      date: '6 ans'
    }
  ]

  return (
    <StyledDivContainer>
      {videos.map(({ channel, title, views, date }, i) => (
        <Video
          key={i}
          channel={channel}
          title={title}
          views={views}
          date={date}
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
