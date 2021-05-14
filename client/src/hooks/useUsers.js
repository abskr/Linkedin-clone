import React, { useState, useEffect } from 'react'
import useFetch from 'use-http'

function useUsers() {
  const { data: users = [] } = useFetch('/users', { suspense: true }, [])

  return {
    users,
  }
}

export { useUsers }