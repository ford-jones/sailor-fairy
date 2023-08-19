import React from "react"
import BookingForm from './subcomponents/BookingForm'
import NavBar from "./subcomponents/NavBar"

export default function Booking() {
    return (
        <>
        <NavBar heading='Booking Form:' />
        <BookingForm />
        <footer className="footer">
            Thank you for booking! I will be in touch within the next 5 working days to discuss 
            availability and any further steps. Any information written above can be revised on the day if any preferences change.
        </footer>
        </>
    )
}