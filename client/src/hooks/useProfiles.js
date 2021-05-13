import React, { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { useParams } from 'react-router-dom'

function useProfiles() {
  const { username } = useParams()
  // Get all profiles
  const { data: profiles = [] } = useFetch('/profiles', { suspense: true }, [])

  // Get myProfile
  const { data: myProfile = [], error, loading } = useFetch(`/profiles/me`, [])

  console.log(myProfile)

  // Get profile by username
  const { data: profile = [] } = useFetch(`/profiles/${username}`, [])

  // const { get, post, put, del, response, loading, error, data } = useFetch('/')
  // const { data: users = [] } = useFetch('/users', [])
  //
  // const getProfile = async (username) => {
  //   await get(`/profile/${username}`)
  //   if (response.ok) {
  //     return setState(data)
  //   }
  // }

  return {
    profile,
    myProfile,
    error,
    loading,
  }
}

export { useProfiles }