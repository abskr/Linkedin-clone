import React from 'react';
import styled from 'styled-components';
const Interests = () => {
  return (
    <Main>
      <Title>Interests</Title>
      <Container>
        <Interest>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_100_100/0/1589990867649?e=1625702400&v=beta&t=xtPHx-YajTSysZ3mK_kYljAxa2ukFqNRrRxzUoznu9Q'
            alt='InterestLogo'
          />
          <InterestInfo>
            <Name>FreeCodeCamp</Name>
            <Followers>522,807 followers</Followers>
          </InterestInfo>
        </Interest>
      </Container>
      <Container>
        <Interest>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4D0BAQHIXTZd-0TR_A/company-logo_100_100/0/1576240838903?e=1625702400&v=beta&t=IdmQ7Ik_c6EdU9saYOr0ta7zt5FEL-_gQfbe5Z6zNX4'
            alt='InterestLogo'
          />
          <InterestInfo>
            <Name>JetBrains</Name>
            <Followers>522,807 followers</Followers>
          </InterestInfo>
        </Interest>
      </Container>
    </Main>
  );
};

export default Interests;
const Main = styled.div`
  height: auto;
  background: white;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  border: 0.5px solid lightgray;
  border-radius: 7px;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.div``;
const Interest = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  img {
    max-width: 50px;
    max-height: 50px;
  }
  display: flex;
`;
const InterestInfo = styled.div`
  margin-left: 10px;
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const Followers = styled.div`
  font-size: 10px;
`;
