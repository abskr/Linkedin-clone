import React, { useState, useEffect } from 'react'
import useFetch from 'use-http'

function useProfiles(username) {
  // Get all profiles
  const { data: profiles = [] } = useFetch('/profiles', { suspense: true }, [])

  // Get profile by id
  const { data: profile = [] } = useFetch(`/profiles/${username}`, [])

  return {
    profiles,
    profile,
  }
}

export { useProfiles }