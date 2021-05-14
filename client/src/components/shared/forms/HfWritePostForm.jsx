import React from "react";

import { Container, Form, Button } from "react-bootstrap";

export default function HfWritePostForm({
  handleSubmit,
  handleInput,
  handleFile,
  postObj,
  handleModal
}) {
  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="forBasicText">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            value={postObj.text}
            onChange={handleInput}
            type="text"
            placeholder="Leave a Comment"
          />
        </Form.Group>
        <Form.File id="custom-file" label="Upload an image" custom onChange={handleFile}/>
        <Button className="mt-4" variant="primary" type="submit" onClick={handleModal}>
          Submit
        </Button>
      </Form>
    </Container>
  )
}
