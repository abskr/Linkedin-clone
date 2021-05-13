import React, { useState, useEffect } from 'react'
import useFetch from 'use-http'

function useExperiences() {
  const [allExperience, setAllExperiences] = useState()
  const [experience, setExperience] = useState()
  const { get, post, put, del, response, loading, error, data } = useFetch('/')
  const { data: users = [] } = useFetch('/users', { suspense: true }, [])

  return {
    allExperience,
    users,
  }
}

export { useExperiences }