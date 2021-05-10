import React from "react";
import { Card, Button, Image, Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
import { BiWorld } from "react-icons/bi";
import { RiMoreLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsArrow90DegRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import editButton from "../../assets/LinkedinSVG's/svgexport-33.svg";
import deleteButton from "../../assets/LinkedinSVG's/svgexport-32.svg";

const cardTitle = {
  fontSize: "20px",
  fontWeight: "400",
};

const cardText = {
  fontSize: "14px",
  fontWeight: "400",
};

const cardImage = {
  maxHeight: "48px",
};

const postImage = {
  width: "100%",
  //   maxHeight: "280px",
};

const iconStyles = {
  marginRight: "5px",
  fontSize: "25px",
};

const likeHeartPraiseImg = {
  width: "16px",
  //   margin: "0",
  //   padding: "0",
  //   verticalAlign: "middle",
};

const commentsText = {
  fontSize: "12px",
  fontWeight: "400",
  color: "rgba(128, 128, 128, 1)",
  //   marginLeft: "3%",
  marginTop: "8%",
};

const dropDownHeading = {
  fontSize: "16px",
};

const dropDownText = {
  fontSize: "12px",
  marginBottom: "2%",
};

export default function HfPostCard({ post, handleDelete }) {
  return (
    <Card bg="white" text="black" className="my-3 card-radius">
      <Card.Body className="px-3 pt-2 pb-0">
        <Card.Title
          className="d-flex justify-content-between align-items-center cardTitle"
          style={cardTitle}
        >
          <div className="d-flex">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQHIXTZd-0TR_A/company-logo_100_100/0/1576240838903?e=1625702400&v=beta&t=IdmQ7Ik_c6EdU9saYOr0ta7zt5FEL-_gQfbe5Z6zNX4"
              alt="InterestLogo"
              style={cardImage}
            />{" "}
            <Name className="ml-2">
              <h6>About</h6>
              <p>522,807 followers</p>
              <p className="timeAndIcons">
                1h &bull;
                <span>
                  <BiWorld />
                </span>
              </p>
            </Name>
          </div>
          <div className="d-flex">
            <SButton>
              <img src={editButton} />
            </SButton>
            <SButton onClick={() => handleDelete(post._id)}>
              <img src={deleteButton} />
            </SButton>
            <DropdownButton
              variant="none"
              id="dropdown-basic-button"
              title={<RiMoreLine />}
              menuAlign="right"
            >
              <ul className="mb-0">
                <ListItem>
                  <Dropdown.Item href="#/action-1">
                    <h6 style={dropDownHeading}>Save</h6>
                    <p style={dropDownText}>Save for later</p>
                  </Dropdown.Item>
                </ListItem>
                <ListItem>
                  <Dropdown.Item href="#/action-2">
                    <h6 style={dropDownHeading}>Copy link to post</h6>
                  </Dropdown.Item>
                </ListItem>
                <ListItem>
                  <Dropdown.Item href="#/action-3">
                    <h6 style={dropDownHeading}>Embed this post</h6>
                    <p style={dropDownText}>
                      Copy and post embeded code on your site
                    </p>
                  </Dropdown.Item>
                </ListItem>
                <ListItem>
                  <Dropdown.Item href="#/action-1">
                    <h6 style={dropDownHeading}>Unfollow JET BRAINS</h6>
                    <p style={dropDownText}>
                      Unfollow JET BRAINS and stop seeing posts
                    </p>
                    <p style={dropDownText}>from JET BRAINS in feed</p>
                  </Dropdown.Item>
                </ListItem>

                <ListItem>
                  <Dropdown.Item href="#/action-2">
                    <h6 style={dropDownHeading}>Mute User</h6>
                  </Dropdown.Item>
                </ListItem>
                <ListItem>
                  <Dropdown.Item href="#/action-3">
                    <h6 style={dropDownHeading}>I don't want to see this</h6>
                    <p style={dropDownText}>
                      Let us know why you don't want to see this
                    </p>
                    <p style={dropDownText}>post</p>
                  </Dropdown.Item>
                </ListItem>
                <ListItem>
                  <Dropdown.Item href="#/action-3">
                    <h6 style={dropDownHeading}>Report this post</h6>
                    <p style={dropDownText}>
                      The post is offensive or the account is hacked
                    </p>
                  </Dropdown.Item>
                </ListItem>
                <ListItem>
                  <Dropdown.Item href="#/action-3">
                    <h6 style={dropDownHeading}>Who can see this post?</h6>
                    <p style={dropDownText}>
                      Visible to anyone on or off LinkedIn
                    </p>
                  </Dropdown.Item>
                </ListItem>
              </ul>
            </DropdownButton>
          </div>

          {/* <button>
            <RiMoreLine />
          </button> */}
        </Card.Title>
        <Card.Text style={cardText}>{post.text}</Card.Text>
        <div className="d-flex justify-content-center">
          <Image
            fluid
            style={postImage}
            src="https://via.placeholder.com/420x280/000000/FFFFFF/?text=LinkedIn+Blog+Post"
          />
        </div>
        <div className="d-inline-flex align-items-baseline">
          <LHRbutton>
            <img
              style={likeHeartPraiseImg}
              src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
            />
            <img
              style={likeHeartPraiseImg}
              src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
            />
            <img
              style={likeHeartPraiseImg}
              src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
            />
          </LHRbutton>
          <p style={commentsText}> 38 &bull; comments </p>
        </div>
      </Card.Body>

      <div className="d-flex mx-3 mt-0">
        <SButton variant="outline-dark">
          <AiOutlineLike style={iconStyles} />
          Like
        </SButton>
        <SButton variant="outline-dark">
          <BiMessageRoundedDetail style={iconStyles} />
          Comment
        </SButton>
        <SButton variant="outline-dark">
          <BsArrow90DegRight style={iconStyles} />
          Share
        </SButton>
        <SButton variant="outline-dark">
          <RiSendPlaneFill style={iconStyles} />
          Send
        </SButton>
      </div>
    </Card>
  );
}

const EButton = styled.image`
  height: 50px;
  width: auto;
`;

const SButton = styled.button`
  border: none !important;
  border-radius: 8%;
  background-color: white;
  color: #5e5d5d;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 3%;
  padding-bottom: 3%;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }
  &:hover {
    background-color: rgba(235, 235, 235, 1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const LHRbutton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 2%;
  padding: 0.1rem;
  margin: 0;
  text-decoration: none;
  background: none;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  h6 {
    font-size: 14px;
    margin-bottom: 3px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: rgba(128, 128, 128, 1);
    margin-bottom: 3px;
    display: flex;
    align-items: center;
  }
  .timeAndIcons {
    justify-content: space-between;
    max-width: 40%;
  }
  span {
    font-size: 16px;
    color: rgba(128, 128, 128, 1);
    display: flex;
  }
`;
const ListItem = styled.li`
  width: 320px;
`;
