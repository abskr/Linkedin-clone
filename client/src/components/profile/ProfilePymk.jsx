import React from 'react'
import styled from 'styled-components'

export default function ProfilePymk({ profile }) {
  return (
    <People>
      <ImageIcon>
        <img src={profile.image} alt="personImage" />
      </ImageIcon>
      <PersonInfo>
        <Name>{profile.name}</Name>
        <Job>Striver in striveSchoole</Job>
        <Button>Connect</Button>
      </PersonInfo>
    </People>
  )
}

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

const Button = styled.button`
  margin-top: 3px;
  width: 90px;
  height: 30px;
  border-radius: 67px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  color: grey;
  :hover {
    background: lightgrey;
  }
`