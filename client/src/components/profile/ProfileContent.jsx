import React from 'react'
import styled from 'styled-components'
import HelpIcon from '@material-ui/icons/Help'

const ProfileContent = () => {
  return (
    <Container>
      <EditPublic>
        <EditText>Edit public profile & URL</EditText>
        <QuestionIcon>
          <HelpIcon />
        </QuestionIcon>
      </EditPublic>
      <hr />
      <AddLanguage>
        <LanguageText>Add profile in another language</LanguageText>
        <QuestionIcon>
          <HelpIcon />
        </QuestionIcon>
      </AddLanguage>
    </Container>
  )
}

export default ProfileContent

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 5px;
  border-radius: 7px;
`
const EditPublic = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
`
const AddLanguage = styled.div`
  display: flex;
  justify-content: space-between;
  color: grey;
`
const EditText = styled.div`
  cursor: pointer;
  :hover {
    color: rgb(30, 144, 255);
  }
`
const LanguageText = styled.div`
  cursor: pointer;
  :hover {
    color: rgb(30, 144, 255);
  }
`
const QuestionIcon = styled.div`
  :hover {
    color: black;
  }
`