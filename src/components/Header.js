import {Link} from "react-router-dom"
import firebase from 'firebase/app'
import 'firebase/auth'

function Header({user, setUser, setUserProfile }){

    const logOut = (e) => {
        e.preventDefault()
        firebase.auth()
        .signOut()
        .then(() => {
            localStorage.removeItem('user')
            setUser(undefined)
            setUserProfile(undefined)
        })
        .catch(err => alert(err))
    }

    return (
        <div className="header">
            <ul>
                <li className="menu-item header-title">
                    <Link to="/">
                        Representative Finder
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/search">
                        Search
                    </Link>
                </li>
                {!user && 
                <li className="menu-item">
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </li>}
                {!user && 
                <li className="menu-item">
                    <Link to="/signin">
                        Sign In
                    </Link>
                </li>}
                {user && 
                <li className="menu-item">
                    <a onClick={(e) => logOut(e)}>
                        Logout
                    </a>
                </li>}
                {user && <li className="menu-item">
                    <Link to="user-profile">
                        User Profile
                    </Link>
                </li>}
            </ul>
        </div>
    )   
}

export default Header