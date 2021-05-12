import React, { Component, Suspense } from 'react'
import ProfilePymk from './ProfilePymk.jsx'
import { getAllProfiles } from '../../services/profileService.js'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export default class PeopleYouKnowContainer extends Component {
  state = {
    profiles: [],
  }

  async componentDidMount() {
    const profiles = await getAllProfiles()
    console.log(profiles)
    this.setState({ ...this.state.profiles, profiles: profiles })
  }

  render() {
    return (
      <Suspense fallback={'loading...'}>
        <Container>
          <Title>People you may know</Title>
          {/*{this.state.profiles.slice(0, 5).map((profile) => (*/}
          {/*  <ProfilePymk key={profile._id} profile={profile} />*/}
          {/*))}*/}
          {/* <Button>Show more</Button> */}
        </Container>
      </Suspense>
    )
  }
}

const Container = styled.div`
  background-color: white;
  margin-top: 20px;
  border-radius: 7px;
  padding: 15px;
`

const Title = styled.div`
  font-weight: 700;
`