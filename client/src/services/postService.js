import { headers } from './index.js'
import { baseURL } from '../config.js'

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

export async function addPost(file, text) {
  const fd = new FormData()
  fd.append("post", file)
  fd.append("text", text)
  const token = window.localStorage.getItem('token').split('"')[1]
  
  console.log(token)
  try {
    const resp = await fetch(`${baseURL}/posts`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`},
      body: fd
    })
    if (resp.ok) {
      //   this.setState({
      //     postObj: {
      //       text: "",
      //     },
      //   });
      const data = await resp.json()
      return data
    } else {
      console.error('an error occured')
      // console.log(postObj)
      // console.log(resp)
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