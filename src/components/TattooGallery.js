import React from "react"
import NavBar from "./subcomponents/NavBar"
import TattooGalleryContainer from "./subcomponents/TattooGalleryContainer"

export default function TattooGallery() {
    return (
        <>
        <NavBar heading="Tattoo Gallery" />
        <TattooGalleryContainer />
        </>
    )
}