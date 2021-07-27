import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
import HanqoutForm from './HanqoutForm'

const HanqoutEdit = () => {
  const history = useHistory()
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    image: '',
    tastingNotes: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    origin: '',
    image: '',
    tastingNotes: '',
  })

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/hanqout/${id}/`)
      setFormData(data)
    }
    getData()
  }, [id])

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(
        `/api/hanqout/${id}/`,
        formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push(`/hanqout/${id}/`)
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <HanqoutForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Edit my Hanqout"
        />
      </div>
    </section>
  )
}

export default HanqoutEdit
