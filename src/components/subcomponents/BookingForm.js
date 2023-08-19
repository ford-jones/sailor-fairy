import React, { useState, useRef } from 'react'
import RejectedPopup from './RejectedPopup'
import SuccessfulPopup from './SuccessfulPopup'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

export default function BookingForm() {
  const [bookingForm, setBookingForm] = useState({
    first_name: '',
    last_name: '',
    pref_name: '',
    email: '',
    mobile_number: '',
    pref_pronoun: '',
    flash: false,
    custom: false,
    brief_description: '',
    pref_day: '',
    pref_time: '',
    any_questions: '',
  })
  const [rejectPopup, setRejectPopup] = useState(false)
  const [successPopup, setSuccessPopup] = useState(false)
  const navigate = useNavigate()
  const formHtml = useRef()

  function handleChange(e) {
    if (e.target.type == 'text') {
      setBookingForm({ ...bookingForm, [e.target.name]: e.target.value })
    }
    if (e.target.type == 'checkbox') {
      setBookingForm({ ...bookingForm, [e.target.name]: true })
      setBookingForm({ ...bookingForm, [e.target.name]: true })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const serviceId = process.env.SERVICE_ID
    const templateId = process.env.TEMPLATE_ID
    const apiKey = process.env.EMAILJS_API_KEY

    if (
      (bookingForm.first_name != '' &&
        bookingForm.last_name != '' &&
        bookingForm.email != '' &&
        bookingForm.mobile_number != '' &&
        bookingForm.pref_day != '' &&
        bookingForm.pref_time != '' &&
        bookingForm.flash == true) ||
      bookingForm.custom == true
    ) {
      emailjs
        .sendForm(serviceId, templateId, formHtml.current, apiKey)
        .then((res) => {
          console.log(res.text)
        })
        .catch((err) => {
          console.log(err.message)
        })

      setSuccessPopup(true)

      setTimeout(() => {
        setSuccessPopup(false)
        navigate('/Gallery')
      }, 3500)
    } else {
      setRejectPopup(true)

      setTimeout(() => {
        setRejectPopup(false)
      }, 3500)
    }
  }

  return (
    <>
      {rejectPopup ? <RejectedPopup /> : null}
      {successPopup ? <SuccessfulPopup /> : null}
      <form ref={formHtml} className="bookingForm" noValidate>

        <h3 className='microHeader'>Booking Details:</h3>

        <label htmlFor="first_name" className="label">
          First Name:
        </label>
        <input
          type="text"
          name="first_name"
          placeholder="(required)"
          value={bookingForm.first_name}
          onChange={handleChange}
          className="textbox"
        ></input>
        <label htmlFor="last_name" className="label">
          Last Name:
        </label>
        <input
          type="text"
          name="last_name"
          placeholder="(required)"
          value={bookingForm.last_name}
          onChange={handleChange}
          className="textbox"
        ></input>
        <label htmlFor="pref_name" className="label">
          Preffered Name:
        </label>
        <input
          type="text"
          name="pref_name"
          placeholder=""
          value={bookingForm.pref_name}
          onChange={handleChange}
          className="textbox"
        ></input>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="text"
          name="email"
          placeholder="(required)"
          value={bookingForm.email}
          onChange={handleChange}
          className="textbox"
        ></input>
        <label htmlFor="mobile_number" className="label">
          Phone Number:
        </label>
        <input
          type="text"
          name="mobile_number"
          placeholder="(required)"
          value={bookingForm.mobile_number}
          onChange={handleChange}
          className="textbox"
        ></input>
        <label htmlFor="pref_pronoun" className="label">
          Preffered Pronouns:
        </label>
        <input
          type="text"
          name="pref_pronoun"
          placeholder=""
          value={bookingForm.pref_pronoun}
          onChange={handleChange}
          className="textbox"
        ></input>

        <h3 className='microHeader'>Flash or Custom?</h3>

        <label htmlFor="flash" className="checkboxLabel">
          Flash:
        </label>
        <input
          type="checkbox"
          name="flash"
          value={bookingForm.flash}
          onChange={handleChange}
        ></input>

        <label htmlFor="custom" className="checkboxLabel">
          Custom:
        </label>
        <input
          type="checkbox"
          name="custom"
          value={bookingForm.custom}
          onChange={handleChange}
        ></input>

        <h3 className='microHeader'>Brief description of your tattoo:</h3>

        <input
          type="text"
          name="brief_description"
          placeholder=""
          value={bookingForm.brief_description}
          onChange={handleChange}
          className="bigTextBox"
        ></input>

        <h3 className='microHeader'>Dates & Times:</h3>

        <label htmlFor="pref_day" className="label">
          Preffered Days:
        </label>
        <input
          type="text"
          name="pref_day"
          placeholder="Sundays, Mondays and Tuesdays are currently open."
          value={bookingForm.pref_day}
          onChange={handleChange}
          className="textbox"
        ></input>
        <label htmlFor="pref_time" className="label">
          Preffered Times:
        </label>
        <input
          type="text"
          name="pref_time"
          placeholder="(required)"
          value={bookingForm.pref_time}
          onChange={handleChange}
          className="textbox"
        ></input>

        <h3 className='microHeader'>Any further questions are welcomed:</h3>

        <input
          type="text"
          name="any_questions"
          placeholder=""
          value={bookingForm.any_questions}
          onChange={handleChange}
          className="bigTextBox"
        ></input>

        <button type="submit" onClick={handleSubmit} className="button">
          Submit your booking
        </button>
      </form>
    </>
  )
}
