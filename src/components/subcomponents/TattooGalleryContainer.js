import React, { useState, useMemo } from 'react'
import GoBack from './GoBack'
import Loader from './Loader'

export default function TattooGalleryContainer() {
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(true)
  const [backArrow, setBackArrow] = useState(false)

  useMemo(() => {
    setGallery(JSON.parse(localStorage.getItem('tattooGallery-images')))
    
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

function onClick(e) {
    e.preventDefault()

    const getContainer = document.getElementsByClassName('imageContainer')
    const container = [...getContainer]

    const allImages = document.getElementsByClassName('flashImage')
    const images = [...allImages]

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

    setBackArrow(true)
    return images[e.target.id].scrollIntoView({block: 'center'})
  }

  return (
    <>
      <div className="imageContainer">
        {loading ? (
          <Loader />
        ) : (
          <>
            {backArrow ? <GoBack setBackArrow={setBackArrow} /> : null}
            {gallery.map((x, i) => (
              <img
                src={x.image}
                alt="galleryImage"
                className="flashImage"
                id={i}
                key={i}
                onClick={onClick}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}
