import React, { Component } from 'react'
import Modal from 'components/shared/modal/Modal.jsx'
import ProfileExperienceCard from 'components/profile/experience-card/ProfileExperienceCard.jsx'
import ProfileExperienceListItem from 'components/profile/experience-card/ProfileExperienceListItem.jsx'
import PVAddExperienceForm from 'components/shared/forms/PVAddExperienceForm.jsx'

// services
import { getAllExperienceByUserId } from 'services/experience-service.js'
import { getAllProfiles } from 'services/users-service.js'
import {
  addExperience,
  deleteExperienceById,
} from 'services/experience-service.js'
import { Flag } from '@material-ui/icons'

const USER_ID = '606c4b4b6fd22800153fdbcf'

export default class ProfileExperienceContainer extends Component {
  state = {
    experience: [],
    experienceObj: {
      role: 'Natural Born Partner',
      company: 'JuniorDev.life',
      startDate: new Date(),
      endDate: new Date(),
      description: 'Just working with what god gave me ;)',
      area: 'Matrix',
      image:
        'https://ih1.redbubble.net/image.2170556352.8233/pp,504x498-pad,600x600,f8f8f8.u1.jpg',
    },
    showModal: false,
    editing: false,
  }

  handleModal = () => {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal,
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    if (this.state.editing === true) {
      const resp = await addExperience(
        this.state.experienceObj,
        '606c4b4b6fd22800153fdbcf'
      )
      console.log(resp)
      this.setState({ ...this.state, showModal: false, editing: false })
    }

    if (this.state.editing === false) {
      const resp = await addExperience(
        this.state.experienceObj,
        '606c4b4b6fd22800153fdbcf'
      )
      this.setState({ ...this.state, showModal: false, editing: false })
      console.log(resp)
    }
  }

  handleInput = (evt) => {
    const value = evt.target.value
    this.setState({
      ...this.state,
      experienceObj: { ...this.state.experienceObj, [evt.target.id]: value },
    })
  }

  handleStartDate = (date) => {
    console.log(date)
    this.setState({
      experienceObj: { ...this.state.experienceObj, startDate: date },
    })
  }

  handleEndDate = (date) => {
    console.log(date)
    this.setState({
      experienceObj: { ...this.state.experienceObj, endDate: date },
    })
  }

  handleEdit = (expObj) => {
    console.log(expObj)
    this.setState({
      ...this.state,
      experienceObj: expObj,
      showModal: !this.state.showModal,
      editing: true,
    })
  }

  handleDelete = async (userId, experienceId) => {
    const resp = await deleteExperienceById(userId, experienceId)
    this.setState({ ...this.state, showModal: false, editing: false })
  }

  async componentDidMount() {
    const data = await getAllExperienceByUserId(USER_ID)
    this.setState({ ...this.state, experience: data })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.experience !== this.state.experience) {
      const data = await getAllExperienceByUserId(USER_ID)
      this.setState({ ...this.state, experience: data })
    }
  }

  render() {
    console.log('checker', this.state)
    return (
      <>
        <Modal
          title="Experience"
          handleModal={this.handleModal}
          showModal={this.state.showModal}
        >
          <PVAddExperienceForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            experienceObj={this.state.experienceObj}
            handleStartDate={this.handleStartDate}
            handleEndDate={this.handleEndDate}
            handleDelete={this.handleDelete}
            currExp={this.state.experienceObj}
            userId={USER_ID}
          />
        </Modal>
        <ProfileExperienceCard
          handleModal={this.handleModal}
          sectionTitle="Experience"
        >
          {this.state.experience.map((exp) => {
            return (
              <ProfileExperienceListItem
                key={exp._id}
                id={exp._id}
                role={exp.role}
                company={exp.company}
                area={exp.area}
                description={exp.description}
                startDate={exp.startDate}
                endDate={exp.endDate}
                image={exp.image}
                currExp={exp}
                handleEdit={this.handleEdit}
              />
            )
          })}
        </ProfileExperienceCard>
      </>
    )
  }
}