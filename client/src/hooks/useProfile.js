import React, { useState, useEffect } from 'react'
import useFetch from 'use-http'
import { useParams } from 'react-router-dom'

function useProfile() {
  const { username } = useParams()
  // Get all profiles
  const { data: profiles = [] } = useFetch('/profiles', [])

  // Get myProfile
  const { data: myProfile = [] } = useFetch(`/profiles/me`, [])

  // Get profile by username
  const { data: profile = [] } = useFetch(`/profiles/${username}`, [])

  // const { get, post, put, del, response } = useFetch('/')
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
  }
}

export { useProfile }