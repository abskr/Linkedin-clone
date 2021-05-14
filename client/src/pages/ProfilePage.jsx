import React, { Suspense } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

// containers
import PeopleYouKnowContainer from 'components/profile/PeopleYouKnowContainer.jsx'

// components
import AdsBar from 'components/shared/adsbar/AdsBar'
import ProfileContent from 'components/profile/ProfileContent.jsx'
import ProfileAdCard from 'components/profile/ProfileAdCard.jsx'
import ProfileAboutCard from 'components/profile/ProfileAboutCard.jsx'
import PvDashboard from 'components/profile/dashboard/PvDashboard'
import ProfileAlsoViewed from 'components/profile/ProfileAlsoViewed.js'
import ProfileActivity from 'components/profile/ProfileActivity.js'
import Interests from 'components/interests/Interests'
import Footer from 'components/shared/Footer.js'
import ProfilePromoted from 'components/profile/ProfilePromoted.js'
import ProfileLearning from 'components/profile/ProfileLearning.js'
import ProfileSkillsCard from 'components/profile/ProfileSkillsCard.jsx'
import ProfileTopCard from '../components/profile/ProfileTopCard.jsx'
import { useProfile } from '../hooks/useProfile.js'
import RollerSpinner from '../components/shared/spinners/RollerSpinner.jsx'
import ProfileExperienceContainer from '../components/profile/experience-card/ProfileExperienceContainer.jsx'

export default function ProfilePage({ ...props }) {
  const { profile } = useProfile()

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
        </Row>
        <Row className="mt-4">
          <Col xs={12} sm={12} md={8}>
            <Suspense fallback={<RollerSpinner />}>
              <ProfileTopCard profile={profile} />
            </Suspense>
            <ProfileAboutCard setShowModal={props.setShowModal} />
            <PvDashboard />
            <ProfileActivity />
            <ProfileExperienceContainer />
            <Interests />
            <ProfileSkillsCard />
          </Col>
          <Col xs={12} md={4}>
            <ProfileContent />
            <ProfilePromoted />
            <ProfileAdCard />
            <PeopleYouKnowContainer />
            <ProfileAlsoViewed />
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