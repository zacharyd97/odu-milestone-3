
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router";
import { CurrentUser } from '../contexts/CurrentUser'

function Navigation() {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ }}>
                <a href="#" onClick={() => navigate("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{  }}>
                <a href="#" onClick={() => navigate("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.user_name}
            </li>
        )
    }

    let profilePic = (
        <img style={{ borderRadius: '50px' }} src="https://placedog.net/100/100" alt="profile pic" />
    )

    return (
        <div>
            {profilePic}
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={() => navigate("/")}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => navigate("/genres")}>
                            Genre
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => navigate("/genres/new")}>
                            Add Genre
                        </a>
                    </li>
                    {loginActions}
                </ul>
            </nav>
        </div>
    )

}

export default Navigation