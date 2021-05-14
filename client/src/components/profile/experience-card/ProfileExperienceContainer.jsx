import React, { useState, useEffect } from 'react'
import Modal from 'components/shared/modal/Modal.jsx'
import ProfileExperienceCard from 'components/profile/experience-card/ProfileExperienceCard.jsx'
import ProfileExperienceListItem from 'components/profile/experience-card/ProfileExperienceListItem.jsx'
import PVAddExperienceForm from 'components/shared/forms/PVAddExperienceForm.jsx'
import { useExperience } from '../../../hooks/useExperience.js'
import { backend, baseURL } from '../../../config.js'
import axios from 'axios'

export default function ProfileExperienceContainer() {
  const [loading, setLoading] = useState(false)
  const [model, setModel] = useState()
  const [editing, setEditing] = useState()
  const [fileInputState, setFileInputState] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
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
    getExperiences()
  }, [])

  const getExperiences = async () => {
    setLoading(true)
    const { data } = await backend.get(`/experience`)
    setExperiences(data)
    setLoading(false)
  }

  const addExperience = async () => {
    setLoading(true)
    const { data } = await backend.post(`/experience`, {
      role: 'Tech Lead',
      company: 'Microsoft',
      area: 'Los Angeles',
    })
    setExperience(data)
    setLoading(false)
  }

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
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

  const handleEdit = (exp) => {
    console.log(exp)
    setExperience({
      ...experience,
      experience: exp,
    })
    setModel(!model)
    setEditing(true)
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
        <hr />
        {/*<input*/}
        {/*  type="file"*/}
        {/*  name="image"*/}
        {/*  onChange={handleFileInputChange}*/}
        {/*  value={fileInputState}*/}
        {/*/>*/}
      </Modal>
      <ProfileExperienceCard
        handleModal={handleModal}
        sectionTitle="Experience"
      >
        {!loading &&
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
                handleEdit={handleEdit}
              />
            )
          })}
      </ProfileExperienceCard>
    </>
  )
}