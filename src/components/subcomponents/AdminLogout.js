import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function AdminLogout() {
    const { logout } = useAuth0()
  
    function handleLogout(e) {
      e.preventDefault()
      logout()
    }

    return(
        <>
        <button type='submit' onClick={handleLogout} className="logout">Logout</button>
        </>
    )
}