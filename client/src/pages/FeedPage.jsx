import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RollerSpinner from '../components/shared/spinners/RollerSpinner'

import { getProfileByUserId } from '../services/profileService.js'

// components
import AdsBar from 'components/shared/adsbar/AdsBar'
import FeedLeftBar from 'components/feed/FeedLeftBar.js'
import Feed from 'components/feed/Feed.js'
import FeedRightBar from 'components/feed/FeedRightBar.js'
import FeedFooter from 'components/feed/FeedFooter.js'
import ProfilePromoted from 'components/profile/ProfilePromoted.js'

// containers
import FeedPostFeedContainer from '../components/feed/FeedPostFeedContainer.jsx'
import axios from 'axios'

export default class FeedPage extends Component {
  state = {
    loading: true,
    posts: [],
    user: {},
  }

  userId = window.localStorage.getItem('token')
  
  componentDidMount = async () => {
    const userData = await getProfileByUserId(this.userId)
    this.setState({ ...this.state, user: userData })
    const { data } = await axios.get('http://localhost:5000/v1/posts')
    this.setState({ ...this.state, posts: data })
  }

  render() {
    console.log(this.state)
    console.log(this.userId)
    return (
      <motion.div
        initial={{ scaleY: 0.99, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0.99, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Container className="pl-0 pr-0">

          <Row className="my-2">
            <Col>
              <AdsBar />
            </Col>
          </Row>

          <Row className="mt-4">
            {/* LeftSidebar */}
            <Col xs={12} md={3}>
              <FeedLeftBar userData={this.state.user}/>
            </Col>

            {/* Feeds */}
            <Col xs={12} md={6}>
              <FeedPostFeedContainer userData={this.state.user} />
            </Col>

            {/* RightSidebar */}
            <Col xs={12} md={3}>
              <FeedRightBar />
              <ProfilePromoted />
              <FeedFooter />
            </Col>
          </Row>

        </Container>
      </motion.div>
    )
  }
}