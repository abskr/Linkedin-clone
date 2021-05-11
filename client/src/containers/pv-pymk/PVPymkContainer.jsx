import React, { Component, Suspense } from 'react'
import PVPymk from '../../components/pv-pymk/PVPymk'
import { getAllProfiles } from '../../services/users-service'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export default class PVPymkContainer extends Component {
  state = {
    profiles: [],
  }

  async componentDidMount() {
    const profiles = await getAllProfiles()
    this.setState({ ...this.state.profiles, profiles: profiles })
  }

  render() {
    return (
      <Suspense fallback={'loading...'}>
        <Container>
          <Title>People you may know</Title>
          {this.state.profiles.slice(0, 5).map((profile) => (
            <PVPymk key={profile._id} profile={profile} />
          ))}
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