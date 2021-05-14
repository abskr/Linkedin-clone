import React, { useState, useEffect } from 'react'
import Modal from 'components/shared/modal/Modal.jsx'
import ProfileExperienceCard from 'components/profile/experience-card/ProfileExperienceCard.jsx'
import ProfileExperienceListItem from 'components/profile/experience-card/ProfileExperienceListItem.jsx'
import PVAddExperienceForm from 'components/shared/forms/PVAddExperienceForm.jsx'
import { useExperience } from '../../../hooks/useExperience.js'
import { baseURL } from '../../../config.js'
import axios from 'axios'

export default function ProfileExperienceContainer() {
  const token = JSON.parse(localStorage.getItem('token'))
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  console.log(options)

  const [loading, setLoading] = useState()
  const [model, setModel] = useState()
  const [editing, setEditing] = useState()
  const [experiences, setExperiences] = useState([])
  const [experience, setExperience] = useState({
    role: '',
    company: '',
    startDate: new Date(),
    endDate: new Date(),
    description: '',
    area: '',
    image: '',
  })

  useEffect(() => {
    return () => {
      console.log(experiences)
    }
  }, [])

  const fetchExperiences = () => {
    const data = axios.get(`${baseURL}`, {}, { options })
  }

  const handleModal = () => {
    setModel(!model)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    console.log(experience)
    // if (editing === true) {
    //   const resp = await addExperience(
    //     this.state.experienceObj,
    //     '606c4b4b6fd22800153fdbcf'
    //   )
    //   console.log(resp)
    //   this.setState({ ...this.state, showModal: false, editing: false })
    // }
    //
    // if (this.state.editing === false) {
    //   const resp = await addExperience(
    //     this.state.experienceObj,
    //     '606c4b4b6fd22800153fdbcf'
    //   )
    //   this.setState({ ...this.state, showModal: false, editing: false })
    //   console.log(resp)
    // }
  }

  const handleInput = (evt) => {
    console.log(evt.target.value)
    const value = evt.target.value
    setExperience({
      ...experience,
      [evt.target.id]: value,
    })
  }

  const handleStartDate = (date) => {
    console.log(date)
    setExperience({
      ...experience,
      startDate: date,
    })
  }

  const handleEndDate = (date) => {
    console.log(date)
    setExperience({
      ...experience,
      endDate: date,
    })
  }

  const handleEdit = (expObj) => {
    console.log(expObj)
    this.setState({
      ...this.state,
      experienceObj: expObj,
      showModal: !this.state.showModal,
      editing: true,
    })
  }

  return (
    <>
      <Modal title="Experience" handleModal={handleModal} showModal={model}>
        <PVAddExperienceForm
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          experienceObj={experience}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
          // handleDelete={handleDelete}
          currExp={experience}
        />
      </Modal>
      <ProfileExperienceCard
        handleModal={handleModal}
        sectionTitle="Experience"
      >
        {loading &&
          experiences?.map((exp) => {
            console.log(exp)
            return (
              <ProfileExperienceListItem
                key={exp._id}
                id={exp._id}
                role={exp.role}
                company={exp.company}
                area={exp.area}
                description={exp.description}
                startDate={exp.from}
                endDate={exp.to}
                image={exp.image}
                // currExp={exp}
                // handleEdit={this.handleEdit}
              />
            )
          })}
      </ProfileExperienceCard>
    </>
  )
}