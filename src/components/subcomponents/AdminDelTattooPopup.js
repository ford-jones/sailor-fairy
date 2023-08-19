import React, { useState } from "react"
import { deleteTattoo } from '../../api/tattooGallery'
import DelPopup from './DelPopup'

export default function AdminDelTattooPopup({setDeletionPopup, tattooState}) {
    const [popup, setPopup] = useState(false)

    function handleClose(e) {
        e.preventDefault()
        setDeletionPopup(false)
    }

    function handleDelete(e) {
        e.preventDefault()
    
        const tattoo = tattooState.find((x) => {
          return x.id == e.target.id
        })
        deleteTattoo(tattoo)
        setPopup(true)

        setTimeout(() => {
            setPopup(false)
            handleClose(e)
            setDeletionPopup(true)
        }, 2500);
    }

    return(
        <>
        {popup
        ? <DelPopup />
        : null
        }
        <div className="delPopup">
        <h1>Delete Tattoos:</h1>
        {tattooState.map((tattoo) => (
            <>
            <div className="delFlash">
              {/* <img
                className="delFlashImage"
                src={`images/tattoos/${tattoo.Filename}`}
                alt="tattooPhoto"
              /> */}
              <form>
                <button type="submit" id={tattoo.id} onClick={handleDelete}>
                  Delete
                </button>
              </form>
            </div>
          </>
        ))}
            <button type="submit" onClick={handleClose}>
                close
            </button>
        </div>
        </>
    )
}