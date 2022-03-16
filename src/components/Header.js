import React from 'react' 
import { Link } from 'react-router-dom'
import '../css/Header.css'
const Header = () => {
  
        return(
            <div className="header-container">
                <p className="good-karma-logo">GoodKarma</p>
                <Link className="good-karma-link" to='/'>Sign Up/ Sign In</Link>
                <Link className="feature-link" to='/available-items'>Home</Link>
                <Link className="feature-link" to='/donate'>Donate</Link>
                <Link className="good-karma-link" to='/about'>About</Link>
            </div>
        )
}


export default Header