import React, { useState, useEffect } from 'react'
import { baseURL } from '../config.js'
import useFetch from 'use-http'

function useExperiences() {
  const [allExperience, setAllExperiences] = useState()
  const [experience, setExperience] = useState()
  const { get, post, put, del, response, loading, error, data } = useFetch('/')
  const { data: users = [] } = useFetch('/users', [])

  useEffect(() => {
    getAllExperiences()
  }, [])

  const getAllExperiences = async () => {
    await get('/users')
    if (response.ok) {
      return setAllExperiences(data)
    }
  }
  const getExperience = (expId) => {}
  const updateExperience = (expId) => {}
  const deleteExperience = (expId) => {}

  return {
    allExperience,
    users,
  }
}

export { useExperiences }