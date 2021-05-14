import React from 'react'
import styled from 'styled-components'
const ProfileAlsoViewed = () => {
  return (
    <Container>
      <Title>People Also Viewed </Title>
      <People>
        <ImageIcon>
          <img
            src="http://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            alt="personImage"
          />
        </ImageIcon>
        <PersonInfo>
          <Name>Jhon Doe</Name>
          <Job>Striver in striveSchoole</Job>
        </PersonInfo>
      </People>
      <hr />
    </Container>
  )
}

export default ProfileAlsoViewed

const Container = styled.div`
  background-color: white;
  margin-top: 20px;
  border-radius: 7px;
  padding: 15px;
`
const Title = styled.div`
  font-weight: 700;
`
const People = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`
const ImageIcon = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`
const PersonInfo = styled.div`
  margin-left: 10px;
  cursor: pointer;
`
const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
`
const Job = styled.div`
  font-size: 10px;
`