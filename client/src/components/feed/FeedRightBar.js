import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
const FeedRightBar = () => {
  return (
    <Container>
      <Head>
        <h5>Add to your feed</h5>
        <ContactSupportIcon />
      </Head>
      <People>
        <ImageIcon>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQFgRYqaa_6VCA/company-logo_100_100/0/1614621724734?e=1626307200&v=beta&t=xwuPFAQATglyI1uphep_q8-lW-0xKOfIH8RysmouzPY"
            alt="personImage"
          />
        </ImageIcon>
        <PersonInfo>
          <Name>IBM </Name>
          <Job>Company • Information Technology and Services</Job>
          <Button>
            <AddIcon />
            Follow
          </Button>
        </PersonInfo>
      </People>
      <People>
        <ImageIcon>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQFgRYqaa_6VCA/company-logo_100_100/0/1614621724734?e=1626307200&v=beta&t=xwuPFAQATglyI1uphep_q8-lW-0xKOfIH8RysmouzPY"
            alt="personImage"
          />
        </ImageIcon>
        <PersonInfo>
          <Name>IBM </Name>
          <Job>Company • Information Technology and Services</Job>
          <Button>
            <AddIcon />
            Follow
          </Button>
        </PersonInfo>
      </People>
      <ViewALL>
        View all recommendations <ArrowRightAltIcon />
      </ViewALL>
    </Container>
  )
}

export default FeedRightBar
const Container = styled.div`
  background-color: white;
  padding-top: 20px;
  border-radius: 7px;
  padding: 15px;
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

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ViewALL = styled.div`
  margin-top: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  :hover {
    background: whitesmoke;
  }
`