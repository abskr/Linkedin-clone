import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import editButton from "../../assets/LinkedinSVG's/svgexport-33.svg";
import { IoIosArrowDown } from "react-icons/io";

const cardTitle = {
  fontSize: "20px",
  fontWeight: "400",
};

const cardText = {
  fontSize: "14px",
  fontWeight: "400",
};

const skillQuizBtn = {
  fontSize: "16px",
};

const listGroupBorder = {
  border: "none",
  borderBottom: "1px solid #e3e3e3",
  paddingLeft: "0px",
};
const listGroupName = {
  fontSize: "14px",
};
const showMoreBtn = {
  fontSize: "16px",
  border: "none",
};

export default function PVskillsCard() {
  return (
    <div>
      <Card bg="white" text="black" className="my-3 card-radius">
        <Card.Body className="px-4 pb-2">
          <Card.Title
            className="d-flex justify-content-between align-items-center cardTitle"
            style={cardTitle}
          >
            {" "}
            Skills & endoursements
            <button>Add a new skill</button>
            <button>
              <img src={editButton} />
            </button>
          </Card.Title>
          <Button
            style={skillQuizBtn}
            className="rounded-pill py-1 mb-3"
            variant="outline-primary"
          >
            <strong>Take skill quiz</strong>
          </Button>{" "}
          <ListGroup className="mb-0 pb-0" style={{ borderRadius: "0" }}>
            <ListGroup.Item style={listGroupBorder}>
              <strong>Communication</strong>
              <p style={listGroupName}>
                <strong>User: Name + Surname </strong> has given an endoursement
                for this skill
              </p>
            </ListGroup.Item>
            <ListGroup.Item style={listGroupBorder}>
              <strong>Business Development</strong>
              <p style={listGroupName}>
                <strong>User: Name + Surname </strong> has given an endoursement
                for this skill
              </p>
            </ListGroup.Item>
            <ListGroup.Item style={listGroupBorder}>
              <strong>Vampire Slaying</strong>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Button
          style={showMoreBtn}
          className="py-0 mb-2"
          variant="outline-primary"
        >
          <strong>
            Show more <IoIosArrowDown />
          </strong>
        </Button>{" "}
      </Card>
    </div>
  );
}
