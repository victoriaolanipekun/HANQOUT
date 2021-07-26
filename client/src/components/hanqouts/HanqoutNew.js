import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
import HanqoutForm from './HanqoutForm'

const HanqoutNew = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
    venue: '',
    date: '',
    time: '',
    price: '',
    keywords: '',
  })
  const [errors, setErrors] = useState({
    title: '',
    image: '',
    description: '',
    venue: '',
    date: '',
    time: '',
    price: '',
    keywords: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setFormData(newFormData)
    setErrors(newErrors)
  }

  // COME BACK TO THIS
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(
        '/api/hanqout/',
        formData,
        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      history.push('/hanqout')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }

  return (
    <section className='section'>
      <div className='container'>
        <HanqoutForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          errors={errors}
          buttonText='Create my Hanqout'
        />
      </div>
    </section>
  )
}

export default HanqoutNew
