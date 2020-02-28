import React from 'react'
import styled from 'styled-components'
import Toolbar from '../toolbar/index'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EmailIcon from '@material-ui/icons/Email'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'

function BottomDashboard() {
  return (
    <Toolbar>
      <BtmToolbarStyledLi active={true}>
        <HomeIcon />
        <span>Acceuil</span>
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <WhatshotIcon />
        <span>Tendances</span>
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <SubscriptionsIcon />
        <span>Abonnements</span>
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <EmailIcon />
        <span>Boite réception</span>
      </BtmToolbarStyledLi>

      <BtmToolbarStyledLi active={false}>
        <VideoLibraryIcon />
        <span>Bibliothèque</span>
      </BtmToolbarStyledLi>
    </Toolbar>
  )
}

const StyledLi = styled.li`
  padding: 5px 0;
  text-align: center;
`
const BtmToolbarStyledLi = styled(StyledLi)`
  color: ${props => (props.active ? 'white' : 'gray')};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8px;
  width: 20%;
  cursor: pointer;

  :hover {
    color: white;
  }
`

export default BottomDashboard
