import React, { Component } from 'react'
import { addPost } from '../../services/postService.js'
import Feed from './Feed.js'
import { getMyProfile } from '../../services/profileService.js'
import { getAllPosts } from '../../services/postService.js'
import HfWritePostForm from 'components/shared/forms/HfWritePostForm.jsx'

export default class FeedWritePostContainer extends Component {
  state = {
    // showModal: false,
    postObj: {
      //   _id: "5d93ac84b86e220017e76ae1", //server generated
      text: '',
    },
    myProfile: {},
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    addPost(this.state.postObj)
  }

  //   handleModal = () => {
  //     console.log("clicked");
  //     this.setState({ showModal: !this.state.showModal });
  //   };

  //   handleSubmit = async (evt) => {
  //     evt.preventDefault();
  //     const resp = await addExperience(
  //       this.state.experienceObj,
  //       "606c4b4b6fd22800153fdbcf"
  //     );
  //     console.log(resp);
  //   };

  handleInput = (evt) => {
    const value = evt.target.value
    this.setState({
      postObj: { ...this.state.postObj, text: value },
      //   ...this.state,
      //   postObj: { ...this.state.postObj, [evt.target.id]: value },
    })
  }

  render() {
    console.log(this.state.postObj)
    return (
      <>
        {/* <Modal
          title="Add Post"
          handleModal={this.handleModal}
          showModal={this.state.showModal}
        >
          <HfWritePostForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            postObj={this.state.pvostObj}
          />
        </Modal> */}

        <Feed
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          postObj={this.state.postObj}
          sectionTitle="Write Post"
        ></Feed>
      </>
    )
  }
}