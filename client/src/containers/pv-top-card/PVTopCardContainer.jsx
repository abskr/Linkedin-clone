import React, { Component, Suspense, lazy } from 'react'
import { getProfileByUserId } from 'services/users-service'
import RollerSpinner from 'components/shared/spinners/RollerSpinner'

// components
const PVTopCard = lazy(() => import('components/pv-top-card/PVTopCard'))

export default class PVTopCardContainer extends Component {
  state = {
    loading: true,
    user: {}
  }

  async componentDidMount() {
    const userProfile = await getProfileByUserId('606c4b4b6fd22800153fdbcf')
    console.log(userProfile)
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