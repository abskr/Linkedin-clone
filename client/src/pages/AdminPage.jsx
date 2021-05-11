import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import ProfileExperienceContainer from 'components/profile/experience-card/ProfileExperienceContainer.jsx'

export default class AdminPage extends Component {
  state = {
    loading: true,
  }

  render() {
    return (
      <motion.div
        initial={{ scaleY: 0.98, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0.98, opacity: 0 }}
        transition={{ duraction: 0.8 }}
      >
        <Container>
          <h3>AdminPage</h3>
          <ProfileExperienceContainer />
        </Container>
      </motion.div>
    )
  }
}