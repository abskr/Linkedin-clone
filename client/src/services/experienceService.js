import { headers } from './index.js'
const _BASE_URL = 'https://striveschool-api.herokuapp.com/api/profile/'

export async function getAllExperienceByUserId(userId) {
  try {
    const resp = await fetch(`${_BASE_URL}/${userId}/experiences`, {
      method: 'GET',
      headers,
    })
    if (resp.ok) {
      const data = await resp.json()
      return data.filter((user) => user.area)
    } else {
      console.error('an error occured')
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getExperience(userId, experienceId) {
  try {
    const resp = await fetch(
      `${_BASE_URL}/${userId}/experiences/${experienceId}`,
      {
        method: 'GET',
        headers,
      }
    )
    if (resp.ok) {
      const data = await resp.json()
      return data
    } else {
      console.error('an error occured')
    }
  } catch (error) {
    console.error(error)
  }
}

export async function addExperience(experienceObj, userId) {
  try {
    const resp = await fetch(`${_BASE_URL}/${userId}/experiences`, {
      method: 'POST',
      headers,
      body: JSON.stringify(experienceObj),
    })
    if (resp.ok) {
      const data = await resp.json()
      return data
    } else {
      console.error('an error occured')
    }
  } catch (error) {
    console.error(error)
  }
}

export async function deleteExperienceById(userId, experienceId) {
  try {
    const resp = await fetch(
      `${_BASE_URL}/${userId}/experiences/${experienceId}`,
      {
        method: 'DELETE',
        headers,
      }
    )
    if (resp.ok) {
      const data = await resp.json()
      return data.filter((user) => user.area)
    } else {
      console.error('an error occured')
    }
  } catch (error) {
    console.error(error)
  }
}