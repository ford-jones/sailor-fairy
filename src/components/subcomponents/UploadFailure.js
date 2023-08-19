import React from "react"

export default function UploadFailure() {
    return (
        <>
        <div className="popup">
            <h1>Oops!</h1>
            <p>Looks like you either tried to upload nothing OR an image that already exists in the database.</p>
            <p>Please refresh and try again.</p>
            <footer>If the problem persists, contact me at fordnicholasjones@gmail.com</footer>
        </div>
        </>
    )
}