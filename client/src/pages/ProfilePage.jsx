import React, { Suspense } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

// containers
import PeopleYouKnowContainer from 'components/profile/PeopleYouKnowContainer.jsx'
import ProfileTopCardContainer from 'components/profile/ProfileTopCardContainer.jsx'

// components
import AdsBar from 'components/shared/adsbar/AdsBar'
import ProfileContent from 'components/profile/ProfileContent.jsx'
import ProfileAdCard from 'components/profile/ProfileAdCard.jsx'
import ProfileAboutCard from 'components/profile/ProfileAboutCard.jsx'
import PvDashboard from 'components/profile/dashboard/PvDashboard'
import ProfilePalsoV from 'components/profile/ProfilePalsoV.js'
import ProfileActivity from 'components/profile/ProfileActivity.js'
import Interests from 'components/interests/Interests'
import Footer from 'components/shared/Footer.js'
import ProfilePromoted from 'components/profile/ProfilePromoted.js'
import ProfileLearning from 'components/profile/ProfileLearning.js'

import ProfileSkillsCard from 'components/profile/ProfileSkillsCard.jsx'
import ProfileExperienceContainer from 'components/profile/experience-card/ProfileExperienceContainer.jsx'
import { useAuth } from '../contexts/AuthContext.js'
import { useExperiences } from '../hooks/useExperiences.js'
import { useProfiles } from '../hooks/useProfiles.js'

export default function ProfilePage({ ...props }) {
  const { user } = useAuth()
  const { allExperience, users, error } = useExperiences()
  const { profiles, profile } = useProfiles('juniorDEVed')

  console.log(profile)

  return (
    <motion.div
      initial={{ scaleY: 0.99, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0.99, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container className="pl-0 pr-0">
        <Row className="m-3">
          <Col>
            <AdsBar />
          </Col>
          {profile.area}
        </Row>
        <Row className="mt-4">
          <Col xs={12} sm={12} md={8}>
            <ProfileTopCardContainer user={user} />
            <ProfileAboutCard setShowModal={props.setShowModal} />
            <PvDashboard />
            <ProfileActivity />
            {/*<ProfileExperienceContainer*/}
            {/*  setShowModal={this.props.setShowModal}*/}
            {/*/>*/}
            <Interests />
            <ProfileSkillsCard />
          </Col>
          <Col xs={12} md={4}>
            <ProfileContent />
            <ProfilePromoted />
            <ProfileAdCard />
            <PeopleYouKnowContainer />
            <ProfilePalsoV />
            <ProfileLearning />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </motion.div>
  )
}