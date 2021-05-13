import React, { useState, Suspense, lazy, useEffect } from 'react'
import { getProfileByUserId } from 'services/profileService.js'
import RollerSpinner from 'components/shared/spinners/RollerSpinner.jsx'

// components
const PVTopCard = lazy(() => import('components/profile/ProfileTopCard.jsx'))

export default function ProfileTopCardContainer({ user }) {
  const [profiles, setProfile] = useState({})

  useEffect(() => {
    fetchProfiles()
  }, [])

  const fetchProfiles = async () => {
    const userProfile = await getProfileByUserId(user._id)
    setProfile(userProfile)
  }

  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<RollerSpinner />}>
        <PVTopCard {...profiles} />
      </Suspense>
    </div>
  )
}