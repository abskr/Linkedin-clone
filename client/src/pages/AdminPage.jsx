import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import PVExperienceListContainer from 'containers/pv-experience-card/PVExperienceListContainer'

export default class AdminPage extends Component {
  state = {
    loading: true
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
          <PVExperienceListContainer />
        </Container>
      </motion.div>
    )
  }
}
