import React from 'react';
import styled from 'styled-components';
import BookmarkIcon from '@material-ui/icons/Bookmark';
const PvDashboard = () => {
  return (
    <Container>
      <Header>
        <YourDashboard>Your dashboard</YourDashboard>
        <Privacy>Private to you</Privacy>
      </Header>
      <DashboardDetails>
        <WhoViewed>
          <Number>10</Number>
          <Text>Who viewed your profile</Text>
        </WhoViewed>
        <ArticlesView>
          <Number>3</Number>
          <Text>Article views</Text>
        </ArticlesView>
        <SearchAppearances>
          <Number>0</Number>
          <Text>Search appearances</Text>
        </SearchAppearances>
      </DashboardDetails>
      <MyItems>
        <BookmarkIcon />
        <TextBookMark>
          <Item>My items</Item>

          <ItemText>Keep track of your jobs, courses and articles</ItemText>
        </TextBookMark>
      </MyItems>
    </Container>
  );
};

export default PvDashboard;

const Container = styled.div`
  height: 250px;
  background: #dce6f1;
  border-radius: 4px;
  padding: 10px;
`;

const Header = styled.div`
  margin-bottom: 10px;
`;
const YourDashboard = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const Privacy = styled.div``;
const DashboardDetails = styled.div`
  display: flex;
  justify-content: space-around;
  background: white;
  padding: 5px;
  border-radius: 6px;
  border: 1px solid grey;
`;
const WhoViewed = styled.div`
  padding: 3px;
`;
const ArticlesView = styled.div`
  border-left: 1px solid grey;
  padding: 3px;
`;
const SearchAppearances = styled.div`
  border-left: 1px solid grey;
  padding: 3px;
`;
const Number = styled.a`
  font-size: 30px;
  padding: 3px;
  :hover {
    text-decoration: 0;
  }
`;
const Text = styled.div`
  font-weight: 300;
  padding: 3px;
`;
const MyItems = styled.div`
  background: white;
  padding: 10px;
  display: flex;
  border-radius: 6px;
  margin-top: 10px;
`;
const Item = styled.a`
  color: black;
  font-weight: 500;
`;
const ItemText = styled.a`
  color: black;
  font-weight: 300;
`;
const TextBookMark = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
