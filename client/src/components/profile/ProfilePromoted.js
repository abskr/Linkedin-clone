import React from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
const ProfilePromoted = () => {
  return (
    <Container>
      <Head>
        <h5>Promoted</h5>
        <MoreHorizIcon />
      </Head>
      <Companies>
        <ImageIcon>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_100_100/0/1517497547164?e=1623283200&v=beta&t=MK8zW2NeqhRQYqJoPintAA5jfPRBKnMxObuT__cD7AQ"
            alt="personImage"
          />
        </ImageIcon>
        <Company>
          <ComponayPromotion>
            <Name>Apllication Deadline Soon</Name>
            <CompanyDis>
              Land your next promotion with an innovative <br /> mobile-first
              MBA.
            </CompanyDis>
          </ComponayPromotion>
          <ArrowForwardIosIcon />
        </Company>
      </Companies>
      <Companies>
        <ImageIcon>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_100_100/0/1517497547164?e=1623283200&v=beta&t=MK8zW2NeqhRQYqJoPintAA5jfPRBKnMxObuT__cD7AQ"
            alt="personImage"
          />
        </ImageIcon>
        <Company>
          <ComponayPromotion>
            <Name>Apllication Deadline Soon</Name>
            <CompanyDis>
              Land your next promotion with an innovative <br /> mobile-first
              MBA.
            </CompanyDis>
          </ComponayPromotion>
          <ArrowForwardIosIcon />
        </Company>
      </Companies>
    </Container>
  )
}

export default ProfilePromoted
const Container = styled.div`
  background-color: white;
  margin-top: 20px;
  border-radius: 7px;
  padding: 15px;
  width: auto;
`

const Companies = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  :hover {
    background: whitesmoke;
    border-radius: 7px;
  }
`
const ImageIcon = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 7px;
  }
`
const Company = styled.div`
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`
const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
`
const CompanyDis = styled.div`
  font-size: 10px;
`
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ComponayPromotion = styled.div``