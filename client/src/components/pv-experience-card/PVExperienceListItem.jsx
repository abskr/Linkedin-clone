import React, { Intl } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit'
import styled from 'styled-components'
const format = require('date-fns/format')

function PVExperienceListItem(props) {
  const startDate = format(new Date(props.startDate), 'MMM yyyy')

  return (
    <Row className="mb-3 border-bottom" style={{ width: '100%' }}>
      <Col xs={2}>
        <img className="mb-3" width="80" height="80" src={props.image} />
      </Col>
      <Col fluid={true}>
        <h5>{props.role}</h5>
        <h6>{props.company}</h6>
        <span className="text-muted">{startDate}</span>
        <br />
        <span>{props.description}</span>
      </Col>
      <div>
        <EditIconButton onClick={() => props.handleEdit(props.currExp)} />
      </div>
    </Row>
  )
}

PVExperienceListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  currExp: PropTypes.object.isRequired
}

export default PVExperienceListItem

const EditIconButton = styled(EditIcon)`
  height: 30px;
  width: 30px;
  background-color: white;
  top: 230px;
  right: 50px;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: lightgrey;
  }
`
