import React from 'react'
import { Card } from 'react-bootstrap'
import './style.module.css'
import editButton from "../../assets/LinkedinSVG's/svgexport-33.svg"

const cardTitle = {
  fontSize: '20px',
  fontWeight: '400'
}

const cardText = {
  fontSize: '14px',
  fontWeight: '400'
}

export default function PVAboutCard({ setShowModal }) {
  return (
    <Card bg="white" text="black" className="my-3 card-radius">
      <Card.Body className="px-4 pt-2 pb-4">
        <Card.Title
          className="d-flex justify-content-between align-items-center cardTitle"
          style={cardTitle}
        >
          {' '}
          About{' '}
          <button onClick={() => setShowModal(true)}>
            <img src={editButton} />
          </button>
        </Card.Title>
        <Card.Text style={cardText}>
          <p className="textbox">
            This is an about me section which contains a breif summary of a
            user's professional experience and skills Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Asperiores autem, at alias, nemo,
            saepe beatae omnis dolore placeat a sunt iusto fuga ea quisquam?
            Nulla inventore laboriosam dicta temporibus eaque.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
