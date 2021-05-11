import React from 'react';
import styled from 'styled-components';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Footer = () => {
  return (
    <Container>
      <Logo>
        Linked
        <LinkedInIcon color='primary' />
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

        <Lines>
          <li>
            <HelpIcon />
            <Text>
              <First>Questions?</First>
              <Secondary>Visit our help center.</Secondary>
            </Text>
          </li>
          <li></li>
          <li>
            <SettingsIcon />
            <Text>
              <First>Manage your account and privacy</First>
              <Secondary>Go to settings.</Secondary>
            </Text>
          </li>
          <li></li>
          <li></li>
        </Lines>
        <Lines>
          <li>
            <SelectOption>
              <Secondary>Select Language</Secondary>
              <select name='Language' id='Language'>
                <option value='english'>English(English)</option>
              </select>
            </SelectOption>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </Lines>
      </Options>

      <Copyright>LinkedIn Corporation © 2021</Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 97%;
  margin: 0 auto;
  border-top: 1px solid grey;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #0a66c2;
  font-weight: bold;
  font-size: 20px;
`;

const Options = styled.div`
  li {
    list-style: none;
    display:flex;
    align-items:flex-start;
  }
  display: flex;
  align items:center;
  justify-content: space-between;
`;

const Copyright = styled.div`
  margin-top: 10px;
  font-size: 10px;
`;

const Lines = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #56678a;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
const First = styled.div`
  font-weight: 700;
`;
const Secondary = styled.div`
  font-weight: 300;
`;
const SelectOption = styled.div`
  display: flex;
  flex-direction: column;
  select {
    width: 270px;
    height: 30px;
    background: lightgrey;
  }
`;
