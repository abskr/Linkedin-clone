import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RollerSpinner from '../components/shared/spinners/RollerSpinner'

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

  componentDidMount = async () => {
    this.setState({ ...this.state, user: this.props.user })
    const { data } = await axios.get('http://localhost:5000/v1/posts')
    this.setState({ ...this.state, posts: data })
  }

  render() {
    return (
      <motion.div
        initial={{ scaleY: 0.99, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0.99, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Container className="pl-0 pr-0">
          {/* <RollerSpinner loading={this.state.loading} /> */}
          <Row className="my-2 advertHeading">
            <Col className="d-none d-md-block col-md-6 offset-md-3">
              <AdsBar />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} sm={12} md={3}>
              <FeedLeftBar />
            </Col>
            <Col xs={12} md={6}>
              {/* <HFWritePostContainer /> */}
              <FeedPostFeedContainer />
            </Col>
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