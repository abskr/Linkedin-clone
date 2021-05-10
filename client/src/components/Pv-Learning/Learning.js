import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Learning = () => {
  return (
    <Container>
      <Head>
        <LinkedInIcon color='primary' />
        <h6>Learning</h6>
      </Head>
      <div>Add new skills with these courses</div>
      <Videos>
        <Image>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0DAQEYWX58tVMaQw/learning-public-crop_60_100/0/1576687713263?e=1618056000&v=beta&t=fGrTRU27f6aqOi_vQFbIrMAAzoPNRIuzqyMxDwPwwd0'
            alt=''
          />
          <Circle>
            <Triangle></Triangle>
          </Circle>
        </Image>

        <Infos>
          <Name>Diversity, Inclusion, and Belonging</Name>
          <Followers>522,807 followers</Followers>
        </Infos>
      </Videos>
      <hr />
      <Videos>
        <Image>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0DAQEYWX58tVMaQw/learning-public-crop_60_100/0/1576687713263?e=1618056000&v=beta&t=fGrTRU27f6aqOi_vQFbIrMAAzoPNRIuzqyMxDwPwwd0'
            alt=''
          />
          <Circle>
            <Triangle></Triangle>
          </Circle>
        </Image>

        <Infos>
          <Name>Diversity, Inclusion, and Belonging</Name>
          <Followers>522,807 followers</Followers>
        </Infos>
      </Videos>
      <hr />
      <SeeAll>
        <span>Show more on LinkedIn Learning</span>
      </SeeAll>
    </Container>
  );
};

export default Learning;
const Container = styled.div`
  background-color: white;
  margin-top: 20px;
  border-radius: 7px;
  padding: 15px;
  width: auto;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h6 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 7px;
  }
`;

const Videos = styled.div`
  margin-top: 10px;
  display: flex;
  img {
    border-radius: 4px;
  }
`;
const Infos = styled.div`
  margin-left: 10px;
`;
const Followers = styled.div`
  font-size: 10px;
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7.5px 0 7.5px 13px;
  border-color: transparent transparent transparent white;
  cursor: pointer;
`;

const SeeAll = styled.a`
  text-style: none;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  width: 100px;
  height: 60px;
`;
const Circle = styled.div`
  position: relative;
  left: 35px;
  top: -45px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #000000cc;
  display: flex;
  align-items: center;
  justify-content: center;
`;
