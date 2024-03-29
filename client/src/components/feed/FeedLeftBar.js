import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-bootstrap'
import EventIcon from '@material-ui/icons/Event'
import { useAuth } from '../../contexts/AuthContext.js'

const FeedLeftBar = () => {
  const { user } = useAuth()
  console.log(user)
  const recentItem = (Item) => <RecentItem>#{Item}</RecentItem>
  const recentEvent = (event) => (
    <RecentItem>
      <EvIcon /> {event}
    </RecentItem>
  )
  return (
    <Container>
      <FirstSection>
        <SideBarTop>
          <BackgroundImage>
            <img
              src="https://i.pinimg.com/originals/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg"
              alt="backgroundImage"
            />
          </BackgroundImage>
          {(user.avatar) ? <Image
            src={user.avatar}
            roundedCircle
            className="Avatar"
          /> : <Image
            src = "http://www.gravatar.com/avatar/913ebd9f754b96b50b14707f4687b8dd?s=200&r=pg&d=mm"
            roundedCircle
            className="Avatar"
          />}
          <Name>Welcome, {user.name} {user.lastname}!</Name>
          <ContactDescription>{user.email}</ContactDescription>
        </SideBarTop>
        <SideBarBottom>
          <SideBarStat>
            <Stat>
              <ProfileViews>Who viewed you</ProfileViews>
              <StatNum>2,780</StatNum>
            </Stat>
            <Stat>
              <ProfileViews>Views on posts</ProfileViews>
              <StatNum>2,780</StatNum>
            </Stat>
          </SideBarStat>
        </SideBarBottom>
      </FirstSection>
      <SecondSection>
        <Title>Recent</Title>
        {recentItem('ReactJs')}
        {recentItem('Javascript')}
        {recentItem('Html5')}
        {recentItem('CSS3')}
      </SecondSection>
      <ThirdSection>
        <Title>Events</Title>
        {recentEvent('project')}
        {recentEvent('project2')}
        {recentEvent('Html5')}
        {recentEvent('CSS3')}
      </ThirdSection>
    </Container>
  )
}

export default FeedLeftBar

const Container = styled.div`
  position: sticky;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`
const FirstSection = styled.div``
const SideBarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;
`
const BackgroundImage = styled.div`
  img {
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }
`
const SideBarBottom = styled.div``
const Name = styled.h1`
  font-size: 16px;
`
const ContactDescription = styled.div`
  font-size: 12px;
`
const StatNum = styled.div`
  font-weight: bold;
  font-size: 12px;
  color: #0a66c2;
`
const SideBarStat = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
const ProfileViews = styled.div`
  color: gray;
  font-size: 13px;
  font-weight: 600;
`

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SecondSection = styled.div`
  text-align: left;
  background: white;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 10px;
`
const Title = styled.div`
  font-size: 17px;
`
const RecentItem = styled.div`
  display: flex;
  font-size: 13px;
  color: gray;
  font-weight: bolder;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
`
const ThirdSection = styled.div`
  text-align: left;
  background: white;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 10px;
`

const EvIcon = styled(EventIcon)`
  height: 17px;
  margin-right: 5px
`