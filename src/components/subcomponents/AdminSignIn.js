import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function adminSignIn() {
  const { loginWithRedirect } = useAuth0()
  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <form>
        <button type="submit" onClick={handleSignIn} className="loginButton">
          sign in
        </button>
      </form>
    </>
  )
}
