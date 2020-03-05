import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ShareIcon from '@material-ui/icons/Share'
import GetAppIcon from '@material-ui/icons/GetApp'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

function Video() {
  const { channel, title, views } = JSON.parse(
    localStorage.getItem('youtubeSession')
  )[0]

  const likes = '20 M'
  const dislikes = '1'
  const subscribed = 'true'
  const subscriptions = '4,4 M'

  return (
    <DivContainer className='video'>
      <VideoCover />
      <VideoDescription>
        <StyledTitle>{title}</StyledTitle>
        <ViewsStatus>{views} de vues</ViewsStatus>
      </VideoDescription>

      <QuickActions type='none'>
        <StyledQALi>
          <ThumbUpIcon />
          <StyledQaSpan>{likes}</StyledQaSpan>
        </StyledQALi>
        <StyledQALi>
          <ThumbDownIcon />
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

const VideoCover = styled.div`
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
