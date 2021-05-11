import React from 'react'
import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import VisibilityIcon from '@material-ui/icons/Visibility'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import EditIcon from '@material-ui/icons/Edit'

export const PVTopCard = (props) => {
  return (
    <Container>
      <BackgroundImage
        src="https://i.pinimg.com/originals/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg"
        alt="backgroundImage"
      />
      <PersonDetails>
        <Name>Aymane Abssi</Name>
        <Job>Strive schoole Student</Job>
        <PlaceAndContact>
          <Place>Planet 2,Galaxy 3,universe 30</Place>
          <Dot></Dot>
          <Contact>Contact info</Contact>
        </PlaceAndContact>
      </PersonDetails>
      <Buttons>
        <OpenTo>
          Open to
          <ExpandMoreIcon />
        </OpenTo>
        <AddProfileSection>
          Add profile section
          <ExpandMoreIcon />
        </AddProfileSection>
        <More>More...</More>
      </Buttons>
      <OpenToWorkDetails>
        <OpenToWork>Open to work</OpenToWork>
        <WhatYouDo>Html,CSS,Js Developer , React js</WhatYouDo>
        <SeeDetails>See details</SeeDetails>
      </OpenToWorkDetails>
      <LinkedInMembers>
        <VisibilityIcon />
        All LinkediN members
      </LinkedInMembers>
      <ProfilePic>
        <img
          src="http://careerconfidential.com/wp-content/uploads/2017/05/Businessman-Copy-Copy.jpg"
          alt="ProfileImage"
        />
      </ProfilePic>
      <CamIcon>
        <PhotoCameraIcon color="primary" />
      </CamIcon>
      <Editicon>
        <EditIcon color="action" />
      </Editicon>
    </Container>
  )
}

export default PVTopCard

const Container = styled.div`
  height: 500px;
  width: auto;
  background: white;
  border-radius: 7px;
  border: 0.5px solid lightgrey;
`
const BackgroundImage = styled.img`
  height: 200px;
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`
const PersonDetails = styled.div`
  margin-top: 40px;
  padding-left: 20px;
`
const Name = styled.div`
  font-size: 30px;
  font-weight: 500;
`
const Job = styled.div`
  font-size: 16px;
  font-weight: 400;
`
const PlaceAndContact = styled.div`
  display: flex;
  align-items: center;
`
const Place = styled.div`
  margin-right: 7px;
  font-size: 14px;
  font-weight: 350;
`
const Dot = styled.div`
  background-color: black;
  height: 2px;
  width: 2px;
  border-radius: 50%;
  margin-right: 7px;
`
const Contact = styled.a`
  font-weight: 500;
`
const Buttons = styled.div`
  padding-left: 20px;
  margin-top: 7px;
  display: flex;
`
const OpenTo = styled.button`
  background-color: rgb(65, 105, 225);
  color: white;
  border-radius: 67px;
  width: 110px;
  height: 30px;
  border: none;
  margin-right: 6px;

  display: flex;
  align-items: center;
`
const AddProfileSection = styled.button`
  background-color: white;
  color: grey;
  border: 1px solid grey;
  height: 30px;
  width: 187px;
  border-radius: 67px;
  margin-right: 6px;
  display: flex;
  align-items: center;
`
const More = styled.button`
  background-color: white;
  color: grey;
  border: 1px solid grey;
  height: 30px;
  width: 80px;
  border-radius: 67px;
  display: flex;
  align-items: center;
`

const OpenToWorkDetails = styled.div`
  height: auto;
  width: 95%;
  margin: 0 auto;
  background: rgb(245, 245, 245);
  margin-top: 10px;
  padding: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: pointer;
  border: 1px solid rgb(220, 220, 220);
  display: flex;
  flex-direction: column;
`
const OpenToWork = styled.a`
  font-weight: bold;
  font-size: 12px;
  color: black;
`
const WhatYouDo = styled.a`
  font-size: 12px;
  color: black;
`
const SeeDetails = styled.a`
  font-size: 12px;
`
const LinkedInMembers = styled.div`
  background: white;
  width: 95%;
  margin: 0 auto;
  border: 2px solid rgb(220, 220, 220);
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`

const ProfilePic = styled.div`
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: white;
  top: 100px;
  left: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    cover: fit;
  }
`
const CamIcon = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: 40px;
  right: 50px;
  cursor: pointer;
`

const Editicon = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  top: 230px;
  right: 50px;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: lightgrey;
  }
`