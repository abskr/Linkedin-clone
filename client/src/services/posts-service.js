import { headers } from './index.js'
import { baseURL } from '../config'

const userToken = window.localStorage.getItem('token')

export async function getAllPosts() {
  try {
    const resp = await fetch(`${baseURL}/posts`, {
      method: 'GET',
      headers,
    })
    if (resp.ok) {
      const data = await resp.json()
      return data
      // return data.filter((user) => user.area);
    } else {
      console.error('an error occured')
    }
  } catch (error) {
    console.error(error)
  }
}

export async function addPost(postObj) {
  try {
    const resp = await fetch(`${baseURL}/posts`, {
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${userToken}`
      },
      body: JSON.stringify(postObj),
    })
    if (resp.ok) {
      //   this.setState({
      //     postObj: {
      //       text: "",
      //     },
      //   });
      const data = await resp.json()
    } else {
      console.error('an error occured')
      console.log(resp)
      console.log(userToken)
    }
  } catch (error) {
    console.error(error)
  }
}

export async function deletePostById(id) {
  try {
    const resp = await fetch(`${baseURL}/posts/${id}`, {
      method: 'DELETE',
      headers,
    })
    if (resp.ok) {
      console.log(resp)
      console.log('the post was succesfully deleted')
    } else {
      console.error('an error occured')
    }
  } catch (error) {
    console.error(error)
  }
}