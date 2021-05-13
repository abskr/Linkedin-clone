import React, { useState } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'

export default function Signup({ setUser, ...props }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginUser = async (credentials) => {
    const resp = await fetch('http://localhost:5000/v1/auth', {
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
    }
  }

  return (
    <Background>
      <Row>
        <Col
          style={{}}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
            alt="logo"
            style={{ width: '150px', height: '70px' }}
          />
        </Col>
      </Row>
      <Row>
        <Col
          style={{}}
          className="d-flex justify-content-center align-items-center mb-4"
        >
          <h2>Make the most of your professional life</h2>
        </Col>
      </Row>
      <FormContainer>
        <form style={{ padding: '12px 0 0 0' }} onSubmit={handleSubmit}>
          <label>
            <p className="m-0">Email</p>
            <input
              type="text"
              style={{ width: '360px' }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <p className="m-0">Password (6 or more characters)</p>
            <input
              type="password"
              style={{ width: '360px' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <p className="text-align-center font-size-12">
              By clicking Agree & Join, you agree to the LinkedIn{' '}
              <a href="">User Agreement</a>, <a href="">Privacy Policy</a>, and{' '}
              <a href=""> Cookie Policy</a>.
            </p>
          </div>
          <div>
            <ButtonLi type="submit">Agree & Join</ButtonLi>
          </div>
          <span
            style={{ position: 'absolute', left: '0', width: '100%' }}
          ></span>
        </form>
      </FormContainer>
    </Background>
  )
}

const Background = styled.div`
  background-color: #f3f2ef;
  align-items: center;
`
const FormContainer = styled.div`
  border-radius: 8px;
  background-color: #fff;
  width: 400px;
  margin: 0 auto;
  padding-top: 24px;
  padding: 0 24px 0 24px;
`
const ButtonLi = styled.button`
  background-color: #0a66c2;
  height: 48px;
  border-radius: 38px;
  border: 0;

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: inherit;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  outline-width: 2px;
  padding: 0 24px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  vertical-align: middle;
  z-index: 0;
  font-weight: 500;
  padding: 0 16px 0 16px;
  width: 100%;
`