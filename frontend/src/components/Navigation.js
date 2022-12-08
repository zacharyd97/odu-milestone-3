

function Navigation() {

    let loginLinks = (
        <>
            <li>
                <a href="#">
                    Sign up
                </a>
            </li>
            <li>
                <a href="#">
                    Login
                </a>
            </li>
        </>
    )

    let profilePic = (
        <img style={{ borderRadius: '50px' }} src="https://placedog.net/100/100" alt="profile pic" />
    )

    return (
        <nav>
            <ul>
                {profilePic}
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                {/* <li>
                    <a href="#">

                    </a>
                </li> */}
                {loginLinks}
            </ul>
        </nav>
    );

}

export default Navigation