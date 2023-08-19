import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return(
        <>
        <img src="images/homeHeader.JPG" alt="sailor_fairy" className="homeHeader"></img>

        <div className="homeContainer">
            <div className="flashLink">
                <Link to="/Flash">
                    <p>Flash:</p>
                </Link>
                <Outlet />
            </div>

            <div className="flashLink">
                <Link to="/Gallery">
                    <p>Tattoo Gallery:</p>
                </Link>
                <Outlet />
            </div>

            <div className="flashLink">
                <Link to="/Booking">
                    <p>Make a Booking:</p>
                </Link>
                <Outlet />
            </div>
        </div>
        </>
    )
}