import React from 'react'
import { Card } from 'react-bootstrap'
import editButton from "../../assets/LinkedinSVG's/svgexport-33.svg"
import styled from 'styled-components'

const cardTitle = {
  fontSize: '20px',
  fontWeight: '400',
}

const cardText = {
  fontSize: '14px',
  fontWeight: '400',
}

export default function ProfileAboutCard({ setShowModal }) {
  return (
    <CardWrapper>
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
              user's professional experience and skills Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Asperiores autem, at alias,
              nemo, saepe beatae omnis dolore placeat a sunt iusto fuga ea
              quisquam? Nulla inventore laboriosam dicta temporibus eaque.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  .card {
    border-radius: 3rem !important;
  }

  .cardTitle {
    font-size: 16px !important;
    font-weight: 600 !important;
  }

  .textbox {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    display: inline-block;
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    margin: 0;
    text-decoration: none;
    background: none;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  button:hover,
  button:focus {
    background-color: rgba(226, 240, 254, 1);
  }

  button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  button:active {
    transform: scale(0.99);
  }
`