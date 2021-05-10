import React from "react";

import { Container, Form, Button } from "react-bootstrap";

export default function HfWritePostForm({
  handleSubmit,
  handleInput,
  postObj,
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
        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
