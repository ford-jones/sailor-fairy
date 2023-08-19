import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HomeButton() {
    return(
        <>
        <Link to="/">
        <div className="homebutton">
            <img className="homebutton" src="images/homeButton.png" alt="homeButton" />
        </div>
        </Link>
        <Outlet />
        </>
    )
}