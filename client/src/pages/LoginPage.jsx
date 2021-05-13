import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import linkedInLgLogo from "../assets/LinkedinSVG's/linkedInLargeLogo.svg"
import { useAuth } from '../contexts/AuthContext.js'
import { Link } from 'react-router-dom'

export default function Login() {
  const { loginUser } = useAuth()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginUser(email, password)
  }

  return (
    <div>
      <img
        style={{ position: 'fixed', left: '250px', top: '265px' }}
        className="m-1 ml-4"
        height={25}
        src={linkedInLgLogo}
        alt="logo"
      />
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: '100vh', width: '100vw', background: 'white' }}
      >
        <Row className="shadow p-3" rounded md={{ span: 6, offset: 3 }}>
          <Col xs={12}>
            <div className="login-wrapper">
              <h3 className="mb-2">Sign in</h3>
              <small className="mb-4">
                Always up-to-date information from your working world
              </small>
              <Row className="mt-3">
                <Col xs={12}>
                  <Form onSubmit={handleSubmit}>
                    <label className="d-block mb-3" style={{ width: '100%' }}>
                      <Form.Control
                        type="text"
                        placeholder="E-Mail address or phone number"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <label className="d-block mb-3" style={{ width: '100%' }}>
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
          <Col xs={12} className="mt-3 text-center">
            <p>
              New in LinkedIn?{' '}
              <Link to="/signup">
                <b>Sign up here</b>
              </Link>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}