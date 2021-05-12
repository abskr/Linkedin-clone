import React, { Component, Suspense } from 'react'
import { getAllPosts, addPost, deletePostById } from 'services/postService.js'

import RollerSpinner from 'components/shared/spinners/RollerSpinner.jsx'
//import Feed from '../../components/Hf-Feed/Feed'

const FeedPostCard = React.lazy(() =>
  import('components/feed/post-card/FeedPostCard.jsx')
)

const Feed = React.lazy(() => import('components/feed/Feed.js'))

export default class FeedPostFeedContainer extends Component {
  state = {
    posts: [],
    postObj: {
      //   _id: "5d93ac84b86e220017e76ae1", //server generated
      text: '',
    },
  }

  async componentDidMount() {
    const posts = await getAllPosts()
    this.setState({ posts: posts })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      const data = await getAllPosts()
      this.setState({ ...this.state, posts: data })
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await addPost(this.state.postObj)
    const posts = await getAllPosts()
    this.setState({ posts: posts })
  }

  handleDelete = async (id) => {
    try {
      await deletePostById(id)
      this.setState((prev) => ({
        posts: prev.posts.filter((p) => p._id !== id),
      }))
    } catch (error) {}
  }

  handleInput = (evt) => {
    const value = evt.target.value
    this.setState({
      postObj: { ...this.state.postObj, text: value },
      //   ...this.state,
      //   postObj: { ...this.state.postObj, [evt.target.id]: value },
    })
  }

  render() {
    return (
      <Suspense fallback={<RollerSpinner />}>
        <Feed
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          postObj={this.state.postObj}
          sectionTitle="Write Post"
        />
        {this.state.posts
          .slice(-20)
          .reverse()
          .map((post) => (
            <FeedPostCard
              key={post._id}
              post={post}
              handleDelete={this.handleDelete}
            />
          ))}
      </Suspense>
    )
  }
}