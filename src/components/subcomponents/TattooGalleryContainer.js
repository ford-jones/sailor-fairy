import React, { useState, useMemo } from 'react'

import { fetchGallery } from '../../api/tattooGallery'
import GoBack from './GoBack'
import Loader from './Loader'

export default function TattooGalleryContainer() {
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(true)
  const [backArrow, setBackArrow] = useState(false)

  const allImages = document.getElementsByTagName('img')
  const images = [...allImages]

  useMemo(async () => {
    const getGallery = await fetchGallery()
    const reverseGallery = getGallery.images.reverse()

    setGallery(reverseGallery)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

  function onClick(e) {
    e.preventDefault()

    const getContainer = document.getElementsByClassName('imageContainer')
    const container = [...getContainer]

    container[0].style.display = 'flex'
    container[0].style.flexDirection = 'column'

    for (let i = 0; i < images.length; i++) {
      const image = images[i]
      if (image.id) {
        image.style.width = '40%'
        image.style.marginLeft = 'auto'
        image.style.marginRight = 'auto'
        image.style.position = 'relative'
      }
    }
    const foundImage = images.find((x) => {
      return x.id === e.target.id
    })
    foundImage.scrollIntoView({ block: 'center' })
    setBackArrow(true)
  }

  return (
    <>
      <div className="imageContainer">
        {loading ? (
          <Loader />
        ) : (
          <>
            {backArrow ? <GoBack setBackArrow={setBackArrow} /> : null}
            {gallery.map((x) => (
              <img
                src=""
                alt="galleryImage"
                className="flashImage"
                id={x.id}
                key={x.id}
                onClick={onClick}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}
