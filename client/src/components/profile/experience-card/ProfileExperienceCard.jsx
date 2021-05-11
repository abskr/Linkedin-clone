import PropTypes from 'prop-types'
import { Container, Card, Row } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai/index'

function ProfileExperienceCard(props) {
  return (
    <Card>
      <Container>
        <Row className="mb-2 mr-3 mt-4 ml-4 d-flex justify-content-between">
          <div>{props.sectionTitle}</div>
          <div>
            <AiOutlinePlus
              onClick={() => props.handleModal(true)}
              style={{ color: 'grey', cursor: 'pointer' }}
              size="25"
            />
          </div>
        </Row>
        <Row className="ml-4 mb-4 mr-3" style={{ width: '95%' }}>
          {props.children}
        </Row>
      </Container>
    </Card>
  )
}

ProfileExperienceCard.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
}

export default ProfileExperienceCard