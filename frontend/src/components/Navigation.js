
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router";
import { CurrentUser } from '../contexts/CurrentUser'

function Navigation() {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ }}>
                <a href="/sign-up" onClick={() => navigate("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{  }}>
                <a href="/login" onClick={() => navigate("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    if (currentUser && currentUser.user_name){
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.user_name}
            </li>
        )
    }
    

    return (
        <div>
            <div>{loginActions}</div>
            {currentUser && <img style={{ borderRadius: '50px' }} src={currentUser.image_url} alt="profile pic" />} 
            <nav>
                <ul>
                    <li>
                        <a href="/" onClick={() => navigate("/")}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="genres" onClick={() => navigate("/genres")}>
                            Genre
                        </a>
                    </li>
                    <li>
                        <a href="/new" onClick={() => navigate("/genres/new")}>
                            Add Genre
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )

}

export default Navigation