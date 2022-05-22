import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = ({ token }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //   useEffect(() => {
  //     if (localStorage.getItem('token')) {
  //       setIsLoggedIn(true)
  //     } else {
  //       setIsLoggedIn(false)
  //     }
  //   }, [token])

  return (
    <div id="nav-bar">
      <div id="nav-links">
        <span>View Posts from Strangers!!</span>
        <div>
          {isLoggedIn ? (
            <div>
              <span>Profile</span>
              <span>Logout</span>
            </div>
          ) : (
            <div>
              <div>
                <span>Login</span>
                <span>Register</span>
              </div>
            </div>
          )}
          ;
        </div>
      </div>
    </div>
  )
}

export default Nav
