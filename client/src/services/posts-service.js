import { headers } from './index.js'
import { baseURL } from '../config'

export async function getAllPosts() {
  try {
    const resp = await fetch(`${baseURL}`, {
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
    const resp = await fetch(`${baseURL}`, {
      method: 'POST',
      headers,
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
    }
  } catch (error) {
    console.error(error)
  }
}

export async function deletePostById(id) {
  try {
    const resp = await fetch(`${baseURL}/${id}`, {
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