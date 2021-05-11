import React from 'react'
import styled from 'styled-components'

const ProfileAdCard = () => {
  return (
    <Container>
      <img
        src="https://pbs.twimg.com/media/DlxDLEWW0AA7cfh.jpg"
        alt="yourDreamIsCloserWithLinkedIn"
      />
    </Container>
  )
}

export default ProfileAdCard

const Container = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 5px;
  border-radius: 7px;
  padding: 15px;
  margin-top: 20px;
  img {
    height: 260px;
  }
`