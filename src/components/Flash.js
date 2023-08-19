import React from "react"

import FlashContainer from './subcomponents/FlashContainer'
import NavBar from "./subcomponents/NavBar"

export default function Flash() {

    return (
        <>
        <NavBar heading='Flash' />
        <FlashContainer />
        </>
    )
}