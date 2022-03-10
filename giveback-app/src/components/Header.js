import React from 'react' 
import { Link } from 'react-router-dom'
import '../css/Header.css'
const Header = () => {
  
        return(
            <div className="header-container">
                <h2 className="good-karma-logo">GK</h2>
                <Link className="good-karma-link" to='/'>Home</Link>
                <Link className="signup-link" to='/signup'>Sign Up </Link>
                <Link className="signin-link" to='/signin'>Sign In </Link>
                {/* <Link className="signout-link" to='/sigout'>Sign Out </Link> */}
                <Link className="feature-link" to='/feature'>Feature</Link>
            </div>
        )
}


export default Header