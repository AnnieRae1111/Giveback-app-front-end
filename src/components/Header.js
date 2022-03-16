import React from 'react' 
import { Link } from 'react-router-dom'
import '../css/Header.css'
const Header = () => {
  
        return(
            <div className="header-container">
                <p className="good-karma-logo">GoodKarma</p>
                <Link className="good-karma-link" to='/'>Home</Link>
                {/* <Link className="signup-link" to='/signup'>Sign Up </Link>
                <Link className="signin-link" to='/signin'>Sign In </Link> */}
                {/* <Link className="signout-link" to='/sigout'>Sign Out </Link> */}
                <Link className="feature-link" to='/donate'>Donate</Link>
            </div>
        )
}


export default Header