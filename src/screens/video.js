import React, { useState } from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ShareIcon from '@material-ui/icons/Share'
import GetAppIcon from '@material-ui/icons/GetApp'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import SubVideos from '../components/sub-videos/index'

function Video({ history, match }) {
  const videos = JSON.parse(localStorage.getItem('youtubeSession'))
  let videoId = match.params.id
  let currentVideo = videos.find(({ id }) => id == videoId)
  const {
    channel,
    title,
    views,
    subscriptions,
    likes,
    dislikes,
    subscribed,
    uid
  } = currentVideo
  let url = `https://www.youtube.com/embed/${uid}`

  const [liked, mutateLiked] = useState(currentVideo.liked)

  const toggleLike = () => {
    mutateLiked(!liked)
    currentVideo.liked = !liked
    localStorage.setItem('youtubeSession', JSON.stringify(videos))
  }

  return (
    <DivContainer className='video'>
      <VideoCover
        width='560'
        height='315'
        src={url}
        allow='accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture'
      />
      <VideoDescription>
        <StyledTitle>{title}</StyledTitle>
        <ViewsStatus>{views} de vues</ViewsStatus>
      </VideoDescription>

      <QuickActions type='none'>
        <StyledQALi onClick={toggleLike}>
          <ThumbUpIcon style={{ color: liked ? '#2196F3' : 'gray' }} />
          <StyledQaSpan>{likes}</StyledQaSpan>
        </StyledQALi>
        <StyledQALi onClick={toggleLike}>
          <ThumbDownIcon style={{ color: liked ? 'gray' : '#2196F3' }} />
          <StyledQaSpan>{dislikes}</StyledQaSpan>
        </StyledQALi>
        <StyledQALi>
          <ShareIcon />
          <StyledQaSpan>Partager</StyledQaSpan>
        </StyledQALi>
        <StyledQALi>
          <GetAppIcon />
          <StyledQaSpan>Téléchatger</StyledQaSpan>
        </StyledQALi>
        <StyledQALi>
          <AddToPhotosIcon />
          <StyledQaSpan>Enregistrer</StyledQaSpan>
        </StyledQALi>
      </QuickActions>

      <Channel type='none'>
        <Account />
        <ChannelDescription>
          <span>
            {channel}&nbsp;&nbsp;
            <LightgrayText>{subscriptions} abonnés</LightgrayText>
          </span>
          <span>
            <SubscribedStatus>
              {subscribed ? 'ABONNE' : 'PAS ABONNE'}
            </SubscribedStatus>
            &nbsp;&nbsp;
            <StyledLink href='#'>REJOINDRE</StyledLink>
          </span>
        </ChannelDescription>
        <NotificationIconContainer>
          <NotificationsNoneOutlinedIcon style={{ color: 'gray' }} />
        </NotificationIconContainer>
      </Channel>
      <SubVideos history={history} />
    </DivContainer>
  )
}

const LightgrayText = styled.span`
  color: lightgray;
`

const SubscribedStatus = styled.span`
  font-weight: 500;
  color: gray;
`

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #2196F3;
  margin-left: 5px;
`

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #282828;
  color: white;
  font-size: 12px;
`

const VideoCover = styled.iframe`
  position: fixed;
  top: 0;
  width: 100%;
  height: 300px;
  background-color: black;
`

const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  padding: 10px 20px 0;
`

const ViewsStatus = styled.div`
  color: gray;
`

const StyledTitle = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
`

const QuickActions = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0 10px 5px;
`

const StyledQALi = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
`

const StyledQaSpan = styled.li`
  margin-top: 5px;
`

const Channel = styled.ul`
  padding: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`

const NotificationIconContainer = styled.span`
  margin-left: auto;
  padding-right: 15px;
`

const Account = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
`

const ChannelDescription = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 13px;

  > span:last-child {
    margin-top: 5px;
  }
`

export default Video
