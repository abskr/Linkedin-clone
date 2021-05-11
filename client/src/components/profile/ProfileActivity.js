import React from 'react'
import styled from 'styled-components'
const ProfileActivity = () => {
  return (
    <Container>
      <Header>
        <Head>
          <Title>Activity</Title>
          <StartPost>start a post</StartPost>
        </Head>
        <Posts>
          Posts you created, shared, or commented on in the last 90 days are
          displayed here.
        </Posts>
      </Header>
      <SeeActivities>See all activities</SeeActivities>
    </Container>
  )
}

export default ProfileActivity

const Container = styled.div`
  background: white;
  border-radius: 7px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0.5px solid lightgray;
`
const Header = styled.div`
  background: white;
  border-radius: 7px;
  padding: 20px;
  margin-top: 0px;
`
const Title = styled.div`
  font-size: 20px;
  color: grey;
`
const StartPost = styled.div`
  color: grey;
`
const Posts = styled.div`
  margin-top: 20px;
  font-size: 12px;
`
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SeeActivities = styled.a`
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 6px;
  border-top: 0.5px solid lightgray;
  text-decoration: 0;
  cursor: pointer;
`