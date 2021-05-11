import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import PropTypes from 'prop-types'
import useToken from '../hooks/useToken.js'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import linkedInLgLogo from "../assets/LinkedinSVG's/linkedInLargeLogo.svg"
import { baseURL } from '../config'

export default function Login({ setUser, ...props }) {
  const { saveToken } = useToken()
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginUser = async (credentials) => {
    const resp = await fetch(`${baseURL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    return await resp.json()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await loginUser({
      email,
      password,
    })
    if (resp) {
      setUser(resp.user)
      saveToken(resp.token)
      history.push('/')
    }
  }

  return (
    <Container
      className="d-flex-row align-items-center justify-content-center"
      style={{ height: '100vh' }}
    >
      <Row className="border p-3" rounded md={{ span: 6, offset: 3 }}>
        <img className="m-1" height={16} src={linkedInLgLogo} alt="logo" />
        <Col xs={12}>
          <div className="login-wrapper">
            <h1 className="mb-0">Log in</h1>
            <small>Always up-to-date information from your working world</small>
            <Row className="mt-2">
              <Col xs={12}>
                <Form onSubmit={handleSubmit}>
                  <label className="d-block" style={{ width: '100%' }}>
                    <Form.Control
                      type="text"
                      placeholder="E-Mail adress or phone number"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label className="d-block" style={{ width: '100%' }}>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <div>
                    <Button
                      variant="primary"
                      size="lg"
                      block
                      type="submit"
                      className="rounded-pill"
                    >
                      Log in
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          <p>
            New in LinkedIn? <b>Sign up here</b>
          </p>
        </Col>
      </Row>
    </Container>
  )
}