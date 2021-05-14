import React from 'react'
import { Card, Button, Image, Dropdown, DropdownButton } from 'react-bootstrap'
import styled from 'styled-components'
import { BiWorld } from 'react-icons/bi'
import { RiMoreLine } from 'react-icons/ri'
import { AiOutlineLike } from 'react-icons/ai'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { BsArrow90DegRight } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'
import editButton from "../../../assets/LinkedinSVG's/svgexport-33.svg"
import deleteButton from "../../../assets/LinkedinSVG's/svgexport-32.svg"



const iconStyles = {
  marginRight: '5px',
  fontSize: '25px',
}

const likeHeartPraiseImg = {
  width: '16px',
  display: 'inline-block',
  border: 'none',
  borderRadius: '2%',
  padding: '0.1rem',
  margin: '0',
  textDecoration: 'none',
  background: 'none',
  color: '#ffffff',
  fontFamily: 'sans-serif',
  fontSize: '1rem',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background 250ms ease-in-out, transform 150ms ease',

  //   margin: "0",
  //   padding: "0",
  //   verticalAlign: "middle",
}

const dropDownHeading = {
  fontSize: '16px',
}

const dropDownText = {
  fontSize: '12px',
  marginBottom: '2%',
}

export default function FeedPostCard({ post, handleDelete }) {
  return (
    <CardContainer bg="white" text="black" className="my-3 card-radius">
      <Card.Body className="px-3 pt-3 pb-0">
        <CardTitle
          className="d-flex justify-content-between align-items-center"
        >
          <div className="d-flex">
            {post.user ? (
              <CardImage src={post.user.avatar} alt="avatar"/>
            ) : (
              <CardImage
                src="https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png"
                alt="avatar"
              />
            )}
            <Name className="ml-2">
              {post.user ? (
                <h6>
                  {post.user.name} {post.user.lastname}
                </h6>
              ) : (
                <h6>How come you dont have a name?</h6>
              )}
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
              <UnordneredList className="mb-0">
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
              </UnordneredList>
            </DropdownButton>
          </div>

          {/* <button>
            <RiMoreLine />
          </button> */}
        </CardTitle>
        <CardText>{post.text}</CardText>
        {post.image && (
          <div className="d-flex justify-content-center">
            <PostImage fluid src={post.image} />
          </div>
        )}
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
          <CommentsText> 38 &bull; comments </CommentsText>
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
    </CardContainer>
  )
}


const CardContainer = styled(Card)`
  border-radius: 10px
`

const UnordneredList = styled.ul`
  list-style-type: none;
`
// const EButton = styled.image`
//   height: 50px;
//   width: auto;
// `

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
`

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
`
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
`
const ListItem = styled.li`
  width: 320px;
`

const CardText = styled(Card.Text)`
  font-size : 14px;
  font-weight : 400;
`
const CardTitle = styled(Card.Title)`
  font-size : 20px;
  font-weight: 400;
`
const CardImage = styled.img`
  max-height: 48px;
`

const PostImage = styled.img`
  width: 100%
`
  //max-height : 280px

const CommentsText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(128, 128, 128, 1);
  margin-top: 8%
`
