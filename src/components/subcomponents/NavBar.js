import React from "react";
import HomeButton from "./HomeButton";

export default function NavBar({heading}) {
    return(
        <>
        <div className="nav">
        <HomeButton />
        <h1 className="header">{heading}</h1>
        </div>
        </>
    )
}