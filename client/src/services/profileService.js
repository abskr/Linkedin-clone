import { headers } from './index.js'
import { baseURL } from '../config'

export async function getAllProfiles() {
  try {
    const resp = await fetch(`${baseURL}/profiles/`, {
      method: 'GET',
      headers,
    })
    if (resp.ok) {
      console.log('PROFILE SERVICE: ')
      const data = await resp.json()
      return data.filter((user) => user.area)
    } else {
      console.error(`No users found`)
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getProfileByUserId(userId) {
  try {
    const resp = await fetch(`${baseURL}/${userId}`, {
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
    const resp = await fetch(`${baseURL}/me`, {
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