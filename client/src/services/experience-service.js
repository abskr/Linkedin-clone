import { headers } from './APIShared'
const _BASE_URL = 'https://striveschool-api.herokuapp.com/api/profile/'

/**
 * EXPERIENCES:
    - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
    Get user experiences
    - POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
    Create an experience. NOTE: every user is allowed to mess only with his own experiences
    - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
    Get a specific experience
    - PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
    Get a specific experience
    - DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
    Get a specific experience
 */

/**
 * @param {string} userId
 * @returns array of objects
 */
export async function getAllExperienceByUserId(userId) {
  try {
    const resp = await fetch(`${_BASE_URL}/${userId}/experiences`, {
      method: 'GET',
      headers
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
        headers
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

/**
 * {
    "_id": "5fc9e402d0446f00154e0f16",
    "role": "Professional Memer",
    "company": "Home Inc.",
    "startDate": "2018-06-08T00:00:00.000Z",
    "endDate": "2020-01-12T00:00:00.000Z",
    "description": "I do mims",
    "area": "Everywhere",
    "username": "sj",
    "user": "5fc8f5fa1f8b3900152678c6",
    "createdAt": "2020-12-04T07:23:46.841Z",
    "updatedAt": "2020-12-04T09:10:26.380Z",
    "__v": 0,
    "image": "https://res.cloudinary.com/dmqsfltrf/image/upload/v1607073025/linkedin/lcfsf4jx6nrvkjknripb.gif"
}
 */

export async function addExperience(experienceObj, userId) {
  try {
    const resp = await fetch(`${_BASE_URL}/${userId}/experiences`, {
      method: 'POST',
      headers,
      body: JSON.stringify(experienceObj)
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
        headers
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
