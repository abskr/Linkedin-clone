import React from 'react'
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create'
import EventNoteIcon from '@material-ui/icons/EventNote'
import PhotoIcon from '@material-ui/icons/Photo'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import DescriptionIcon from '@material-ui/icons/Description'
import { green } from '@material-ui/core/colors'
import { Form, Button } from 'react-bootstrap'

const Feed = ({ handleSubmit, handleInput, postObj }) => {
  return (
    <Container>
      <FeedInputContainer>
        <FeedInput>
          <CreateIcon />
          <ImageIcon>
            <img src="{profile.image}" alt="personImage" />
          </ImageIcon>
          <form onSubmit={handleSubmit}>
            <Input
              value={postObj.text}
              onChange={handleInput}
              type="text"
              placeholder="Leave a Comment"
            />
            <Submit>
              <Button className="rounded-pill" type="submit" variant="outline-secondary">Post</Button>
            </Submit>
          </form>
        </FeedInput>
        <InputOptions>
          <Photo>
            <PhotoIcon color="primary" />
            Photo
          </Photo>
          <Video>
            <VideoLibraryIcon color="secondary" />
            Video
          </Video>
          <Event>
            <EventNoteIcon color="action" />
            Event
          </Event>
          <Article>
            <DescriptionIcon style={{ color: green[500] }} />
            Write article
          </Article>
        </InputOptions>
      </FeedInputContainer>
    </Container>
  )
}

export default Feed
const Container = styled.div``
const FeedInputContainer = styled.div`
  background-color: white;
  padding: 10px;
  paddin-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`
const FeedInput = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: gray;
  padding-left: 15px;
  form {
    display: flex;
    width: 100%;
  }
`
const ImageIcon = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`
const Input = styled.input`
  border: none;
  flex: 1;
  margin-left: 10px;
  outline-width: none;
  font-weight: 600;
  :focus {
    outline: none;
  }
`
const Submit = styled.div`
  display: block;
`
const InputOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: gray;
  margin-top: 15px;
  cursor: pointer;
  padidn: 10px;
`
const Photo = styled.div`
  :hover {
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 2px;
  }
`
const Video = styled.div`
  :hover {
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 2px;
  }
`
const Event = styled.div`
  :hover {
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 2px;
  }
`
const Article = styled.div`
  :hover {
    padding: 2px;
    background-color: whitesmoke;
    border-radius: 10px;
  }
`