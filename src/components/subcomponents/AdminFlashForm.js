import React, { useEffect, useState } from 'react'
import { fetchFlash, postFlash } from '../../api/flash'
import { postFlashImage } from '../../api/flashImages'
import AdminDelFlashPopup from './AdminDelFlashPopup'
import AdminUploadPopup from './AdminUploadPopup'
import UploadFailure from './UploadFailure'

export default function AdminFlashForm() {
  const [textForm, setTextForm] = useState({
    id: '',
    Date: '',
    Filename: '',
  })
  const [imageForm, setImageForm] = useState({
    preview: '',
    data: '',
  })
  const [postStatus, setPostStatus] = useState('')
  const [popup, setPopup] = useState(false)
  const [deletionPopup, setDeletionPopup] = useState(false)
  const [failPopup, setFailPopup] = useState(false)
  const [flashState, setFlashState] = useState([])

  async function handleImage(e) {
    e.preventDefault()

    let formData = new FormData()
    formData.append('image', imageForm.data)

    fetch('http://localhost:8080/api/v1/flashImages', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        setPostStatus(res.status)
        console.log('POST status: ', postStatus)
        const image = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        setImageForm(image)
      })
      .catch((err) => {
        console.error(err)
      })

    const flash = await fetchFlash()
    const newId = String(Number(flash.images.pop().id) + 1)
    const date = new Date(Date.now())
    setTextForm({
      ...textForm,
      id: newId,
      Date: date,
      Filename: e.target.files[0].name,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const flash = await fetchFlash()
    const findMatch = flash.images.filter((x) => {
      return x.Filename === textForm.Filename
    })

    if (textForm.id === '' || findMatch.length > 0) {
      setFailPopup(true)
      setTimeout(() => {
        setFailPopup(false)
      }, 4000)
    } else {
      postFlashImage(imageForm)
      postFlash(textForm)
      handleImage(e)
      setPopup(true)
      setTimeout(() => {
        setPopup(false)
        setTextForm({ id: '', Date: '', Filename: '', Taken_status: '0' })
        setImageForm({ preview: '', data: '' })
      }, 3000)
    }
  }

  async function handleDelete(e) {
    e.preventDefault()
    const flash = await fetchFlash()
    setDeletionPopup(true)
    setFlashState(flash.images)
  }

  useEffect(async () => {
    const flash = await fetchFlash()
    setFlashState(flash.images)
  }, [deletionPopup])

  return (
    <>
      {failPopup ? <UploadFailure /> : null}
      {deletionPopup ? (
        <AdminDelFlashPopup
          setDeletionPopup={setDeletionPopup}
          flashState={flashState}
        />
      ) : null}
      {popup ? <AdminUploadPopup /> : null}
      <h2>Flash gallery image upload:</h2>
      <form action="/images" encType="multipart/form-data" method="post">
        <input type="file" name="image" onChange={handleImage}></input>
      </form>
      <img src={imageForm.preview} alt="flashPreview"></img>
      <form noValidate>
        <button type="submit" onClick={handleSubmit} className="button">
          Submit to database
        </button>
        <button type="submit" onClick={handleDelete}>
          Delete Flash...
        </button>
      </form>
      <div className="break"></div>
    </>
  )
}
