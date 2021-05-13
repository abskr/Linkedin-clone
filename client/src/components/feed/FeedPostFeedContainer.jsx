import React, { Component, Suspense } from 'react'
import { getAllPosts, addPost, deletePostById } from 'services/postService.js'
import Modal from 'components/shared/modal/Modal.jsx'
import HfWritePostForm from 'components/shared/forms/HfWritePostForm.jsx'

import RollerSpinner from 'components/shared/spinners/RollerSpinner.jsx'
import { Button, Card } from 'react-bootstrap'
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
    showModal: false,
  }

  async componentDidMount() {
    const posts = await getAllPosts()
    this.setState({ posts: posts }) //, postObj: {...this.state.postObj, user : this.props.userData._id} })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.posts.length !== this.state.posts.length) {
      const data = await getAllPosts()
      this.setState({ ...this.state, posts: data })
    }
  }

  handleModal = () => {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal,
    })
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
        <Modal
          title="Experience"
          handleModal={this.handleModal}
          showModal={this.state.showModal}
        >
          <HfWritePostForm
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
            postObj={this.state.postObj}
          />
        </Modal>
        <Card className="mb-3" style={{ borderRadius: '10px' }}>
          <div className="d-flex align-items-center">
            <div className="pl-4 mt-2">
              <img
                style={{ borderRadius: '50%' }}
                width="48"
                src="http://careerconfidential.com/wp-content/uploads/2017/05/Businessman-Copy-Copy.jpg"
                loading="lazy"
                height="48"
                alt="yourPic"
                id="ember2044"
                class="lazy-image ember-view EntityPhoto-circle-3"
                // onClick={() => props.history.push('/profile/me')}
              />
            </div>
            <Button
              style={{ height: '2.4rem', width: '100%'}}
              variant="light"
              className="rounded-pill text-left text-muted mx-2"
              onClick={this.handleModal}
            >
              What's on your mind?
            </Button>
          </div>
          <div className="d-flex justify-content-around mt-3 pb-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#70B5F9"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
              <span className="pl-1">Photo</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#7FC15E"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
              <span className="pl-1">Video</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#E7A33E"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
              </svg>
              <span className="pl-1">Event</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#F5987E"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
              <span className="pl-1">Write article</span>
            </div>
          </div>
        </Card>
        {/* <Feed
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          postObj={this.state.postObj}
          sectionTitle="Write Post"
          userData={this.props.userData}
        /> */}
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