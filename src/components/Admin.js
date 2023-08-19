import React, {useEffect} from "react"
import HomeButton from './subcomponents/HomeButton'
import AdminFlashForm from './subcomponents/AdminFlashForm'
import AdminTattooForm from './subcomponents/AdminTattooForm'
import AdminSignIn from './subcomponents/AdminSignIn'
import AdminLogout from "./subcomponents/AdminLogout"
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from "react-router-dom"
import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { useCacheUser } from '../auth0-utils'
import { getUser } from '../api/users'

export default function Admin() {
    useCacheUser()

    const navigate = useNavigate()
    
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()
    
    useEffect(() => {
      if (!isAuthenticated) {
        clearLoggedInUser()
      } else {
        getAccessTokenSilently()
          .then((token) => getUser(token))
          .then((userInDb) => {
            userInDb ? updateLoggedInUser(userInDb) : navigate('/Admin')
          })
          .catch((err) => console.error(err))
      }
    }, [isAuthenticated])

    if(!isAuthenticated) {
        return <AdminSignIn />
        
    } else {
        return (
            <>
            <h1 className="header">Admin Interface:</h1>
            <HomeButton />
            <AdminLogout />
            <AdminFlashForm />
            <AdminTattooForm />
            </>
        )
    }
}