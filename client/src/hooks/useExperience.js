import React, { useState, useEffect } from 'react'
import useFetch from 'use-http'

function useExperience() {
  const { get, post, put, del, loading, data } = useFetch(
    '/experience',
    { suspense: false },
    []
  )
  const [experience, setExperience] = useState({})
  const [experiences, setExperiences] = useState()

  useEffect(() => {
    return () => {
      getExperiences()
    }
  }, [])

  const addExperience = async () => {
    await post('/')
    return setExperience(data)
  }

  const getExperiences = async () => {
    await get('/')
    setExperiences(data)
  }

  return {
    loading,
    experiences,
    addExperience,
    getExperiences,
  }
}

export { useExperience }