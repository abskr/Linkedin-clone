import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
const FeedFooter = () => {
  return (
    <Container>
      <Logo>
        Linked
        <LinkedInIcon color="primary" />
      </Logo>
      <Options>
        <Lines>
          <li>About</li>
          <li>Community Guidelines</li>
          <li>Privacy & terms</li>
          <li>Sales Solutions</li>
          <li>Safety center</li>
        </Lines>
        <Lines>
          <li>Accessibility</li>
          <li>Careers</li>
          <li>Add Choices</li>
          <li>Mobile</li>
          <li></li>
        </Lines>
        <Lines>
          <li>Talent Solutions</li>
          <li>Marketing Solutions</li>
          <li>Advertising</li>
          <li>Small Business</li>
          <li></li>
        </Lines>
      </Options>

      <Copyright>LinkedIn Corporation © 2021</Copyright>
    </Container>
  )
}

export default FeedFooter

const Container = styled.div`
  width: 97%;
  margin: 0 auto;
  border-top: 1px solid grey;
  margin-top: 20px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #0a66c2;
  font-weight: bold;
  font-size: 20px;
`

const Options = styled.div`
  li {
    list-style: none;
    display:flex;
    align-items:flex-start;
    cursor:pointer;
  }
  display: flex;
  align items:center;
  justify-content: space-between;
`

const Copyright = styled.div`
  margin-top: 10px;
  font-size: 10px;
`

const Lines = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #56678a;
`