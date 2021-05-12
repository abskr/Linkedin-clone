import React, { Component, Suspense, lazy } from 'react'
import { getProfileByUserId } from 'services/profileService.js'
import RollerSpinner from 'components/shared/spinners/RollerSpinner.jsx'

// components
const PVTopCard = lazy(() => import('components/profile/ProfileTopCard.jsx'))

export default class ProfileTopCardContainer extends Component {
  state = {
    loading: true,
    user: {},
  }

  async componentDidMount() {
    const userProfile = await getProfileByUserId('606c4b4b6fd22800153fdbcf')
    this.setState({ ...this.state, user: userProfile })
  }
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Suspense fallback={<RollerSpinner />}>
          <PVTopCard {...this.state.user} />
        </Suspense>
      </div>
    )
  }
}