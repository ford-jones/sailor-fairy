import React from 'react'

export default function GoBack({ setBackArrow }) {
  function handleClick(e) {
    e.preventDefault()
    setBackArrow(false)
    window.location.reload()
  }

  return (
    <>
      <div>
        <img
          className="backButton"
          src="images/backArrow.png"
          alt="backButton"
          onClick={handleClick}
        />
      </div>
    </>
  )
}
