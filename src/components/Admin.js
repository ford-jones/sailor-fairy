import React from "react"
import HomeButton from './subcomponents/HomeButton'
import AdminFlashForm from './subcomponents/AdminFlashForm'
import AdminTattooForm from './subcomponents/AdminTattooForm'
import AdminSignIn from './subcomponents/AdminSignIn'
import AdminLogout from "./subcomponents/AdminLogout"
import { useAuth0 } from '@auth0/auth0-react'

export default function Admin() {

    const { isAuthenticated } = useAuth0()

    if(isAuthenticated) {
      return (
          <>
            <h1 className="header">Admin Interface:</h1>
            <HomeButton />
            <AdminLogout />
            <AdminFlashForm />
            <AdminTattooForm />
          </>
        )
      } else {
        return <AdminSignIn />
      }
}