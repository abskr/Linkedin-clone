import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Row } from 'react-bootstrap'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function PVAddExperienceForm({
  handleSubmit,
  handleInput,
  handleStartDate,
  handleEndDate,
  experience,
  handleDelete,
  currExp,
  userId,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="role">
        <Form.Label className="text-muted">Role *</Form.Label>
        <Form.Control
          onChange={handleInput}
          value={experience.role}
          type="text"
          placeholder="Enter role"
        />
      </Form.Group>
      <Form.Group controlId="company">
        <Form.Label className="text-muted">Company *</Form.Label>
        <Form.Control
          onChange={handleInput}
          value={experience.company}
          type="text"
          placeholder="Enter company name"
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label className="text-muted">Description *</Form.Label>
        <Form.Control
          onChange={handleInput}
          value={experience.description}
          type="text"
          placeholder="Enter description"
        />
      </Form.Group>
      <Form.Group controlId="area">
        <Form.Label className="text-muted">Location *</Form.Label>
        <Form.Control
          onChange={handleInput}
          value={experience.area}
          type="text"
          placeholder="Location"
        />
      </Form.Group>
      <Form.Group controlId="image">
        <Form.Label className="text-muted">Logo *</Form.Label>
        <Form.Control
          onChange={handleInput}
          value={experience.image}
          type="text"
          placeholder="Url"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-muted mr-3 mt-4">Start Date</Form.Label>
        <DatePicker
          selected={new Date(experience.startDate)}
          onChange={handleStartDate}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-muted mr-3">End Date</Form.Label>
        <DatePicker
          selected={new Date(experience.endDate)}
          onChange={handleEndDate}
        />
      </Form.Group>

      <Row className="justify-content-between">
        <Button
          onClick={() => handleDelete(userId, currExp._id)}
          className="mt-4 ml-5"
          variant="dark"
        >
          Delete
        </Button>
        <Button className="mt-4 mr-5" variant="primary" type="submit">
          Save
        </Button>
      </Row>
    </Form>
  )
}

PVAddExperienceForm.propTypes = {}

export default PVAddExperienceForm