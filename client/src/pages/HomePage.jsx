import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RollerSpinner from '../components/shared/spinners/RollerSpinner'

// components
import AdsBar from 'components/shared/ads-bar/AdsBar'
import HfLeftBar from 'components/Hf-leftBar/HfLeftBar'
import Feed from 'components/Hf-Feed/Feed'
import RightHpBar from 'components/Hf-RightBar/RightHpBar'
import HfFooter from 'components/Hf-Footer/HfFooter'
import Promoted from 'components/Pv-Promoted/Promoted'

// containers
import HfPostFeedContainer from '../containers/hf-postFeedContainer/HfPostFeedContainer'
import axios from 'axios'

export default class HomePage extends Component {
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
    console.log(this.state)
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
              <HfLeftBar />
            </Col>
            <Col xs={12} md={6}>
              {/* <HFWritePostContainer /> */}
              <HfPostFeedContainer />
            </Col>
            <Col xs={12} md={3}>
              <RightHpBar />
              <Promoted />
              <HfFooter />
            </Col>
          </Row>
        </Container>
      </motion.div>
    )
  }
}