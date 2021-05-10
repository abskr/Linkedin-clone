import { headers } from './index.js'
const _BASE_URL = 'https://striveschool-api.herokuapp.com/api/profile/'

export async function getAllProfiles() {
  try {
    const resp = await fetch(`${_BASE_URL}`, {
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

export async function getProfileByUserId(userId) {
  try {
    const resp = await fetch(`${_BASE_URL}/${userId}`, {
      method: 'GET',
      headers,
    })
    if (resp.ok) {
      const data = await resp.json()
      return data
    }
    console.error('an error occured')
  } catch (error) {
    console.error(error)
  }
}

export async function getMyProfile() {
  try {
    const resp = await fetch(`${_BASE_URL}/me`, {
      method: 'GET',
      headers,
    })
    if (resp.ok) {
      const data = await resp.json()
      console.log(data)
      return data
    } else {
      console.error('an error occured')
    }
  } catch (error) {
    console.error(error)
  }
}