import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {motion} from "framer-motion";

// containers
import PVPymkContainer from "containers/pv-pymk/PVPymkContainer";
import PVTopCardContainer from "containers/pv-top-card/PVTopCardContainer";

// components
import AdsBar from "components/shared/ads-bar/AdsBar";
import PVProfileContent from "components/pv-profile-content/PVProfileContent";
import PVAdCard from "components/pv-ad-card/PVAdCard";
import PVAboutCard from "components/pv-about-card/PVAboutCard";
import PvDashboard from "components/pv-dashboard/PvDashboard";
import PVPalsoV from "components/pv-pAlsoViewing/PVPalsoV";
import Pvactivity from "components/pv-activities/Pvactivity";
import Interests from "components/interests/Interests";
import Footer from "components/footer/Footer";
import Promoted from "components/Pv-Promoted/Promoted";
import Learning from "components/Pv-Learning/Learning";

import PVskillsCard from "components/pv-skills&endourse/PVskillsCard";
import PVExperienceListContainer from "containers/pv-experience-card/PVExperienceListContainer";

export default class ProfilePage extends Component {
  render() {
    return (
      <motion.div
        initial={{scaleY: 0.99, opacity: 0}}
        animate={{scaleY: 1, opacity: 1}}
        exit={{scaleY: 0.99, opacity: 0}}
        transition={{duration: 0.3}}
      >
        <Container className="pl-0 pr-0">
          <Row className="m-3">
            <Col>
              <AdsBar/>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} sm={12} md={8}>
              <PVTopCardContainer/>
              <PVAboutCard setShowModal={this.props.setShowModal}/>
              <PvDashboard/>
              <Pvactivity/>
              <PVExperienceListContainer
                setShowModal={this.props.setShowModal}
              />
              <Interests/>
              <PVskillsCard/>
            </Col>
            <Col xs={12} md={4}>
              <PVProfileContent/>
              <Promoted/>
              <PVAdCard/>
              <PVPymkContainer/>
              <PVPalsoV/>
              <Learning/>
            </Col>
          </Row>
          <Row>
            <Footer/>
          </Row>
        </Container>
      </motion.div>
    );
  }
}