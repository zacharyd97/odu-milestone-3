
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router";
import { CurrentUser } from '../contexts/CurrentUser'
import LoginForm from '../users/loginForm';
import SignUpForm from '../users/signUpForm';


function Navigation() {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => navigate.push("/login")}>
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
                        <a href="#" onClick={() => navigate.push("/")}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => navigate.push("/places")}>
                            Places
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => navigate.push("/places/new")}>
                            Add Place
                        </a>
                    </li>
                    {loginActions}
                </ul>
            </nav>
        </div>
    )

}

export default Navigation