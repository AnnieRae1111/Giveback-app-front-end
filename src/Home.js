import React, { useState } from "react";
import { InputGroup, InputGroupText, Input, Button, Collapse} from 'reactstrap'
// import '../css/home.css'
import axios from "axios";
import './css/Home.css'

const Home = () => {
    let newUser = {
        email: '',
        password: ''
    }
    let userLogin = {
        email: '',
        password: ''
    }
    const [user, setUser] = useState(newUser)
    const [login, setLogin] = useState(userLogin)
    const [toggleCreate, setToggleCreate] = useState(false)
    const toggleCreateAccount = () => { 
        setToggleCreate(!toggleCreate)
        setAccountText('')
        setToggleLogin(false)}
    const [toggleLogin, setToggleLogin] = useState(false)
    const toggleLoginAccount = () => {
        setToggleLogin(!toggleLogin) 
        setAccountText('')
        setToggleCreate(false)}
    const [accountText, setAccountText] = useState('')

    const handleChange = (event) => {
        event.preventDefault()
        setUser({ ...user, [event.target.id]: event.target.value,});
        setLogin({ ...login, [event.target.id]: event.target.value,})
        console.log(user)
        console.log(login);
    }
    
    const createURL = 'http://localhost:8000/api/users/signup'
    const loginURL = 'http://localhost:8000/api/users/signin'
    const createAccount = async (event) => {
        event.preventDefault()
        setAccountText('Account setup Login to claim or post items!')
        try {
            await axios({
            method: 'post',
            url: createURL,
            data: user
            })
            .then(res => console.log(res))
            
        } catch (error) {}
        
        
    }
    const loginAccount = async (event) => {
        event.preventDefault()
        setAccountText('Login Successful')
        try {
            await axios({
            method: 'post',
            url: loginURL,
            data: login
            })
            .then(res => localStorage.setItem("token", res.data.token))
            .then(localStorage.setItem('User', login.email))                
        } catch (error) {  
        }
        
    }
    return(
        <div className="account-page">
            <div className="login-welcome">
                <h2 className="landing-page-welcome"> GOOD KARMA</h2>
                <h4 className="landing-page-login">Log in or create an account to get started.</h4>
            </div>
            <div className="buttons">
            <Button className="account-buttons login" color="primary" onClick={toggleLoginAccount } style={{ marginBottom: '1rem' }} >
            Login 
            </Button>
            <Collapse isOpen= { toggleLogin }>
            <h4 className="account-text">{ accountText }</h4>
            <InputGroup className="login-input">
                <InputGroupText >Username</InputGroupText>
                <Input className="login-input" id="email" onChange={handleChange} value={user.email} placeholder="email" />
            </InputGroup>
            <br />
            <InputGroup className="login-input">
                <InputGroupText >Password</InputGroupText>
                <Input className="login-input" id="password" type='password' onChange={handleChange} value={user.password} placeholder="password" />
            </InputGroup>
        <Button onClick={loginAccount}> Login into Account</Button>
        
            </Collapse>
            <Button className="account-buttons" color="primary" onClick={toggleCreateAccount} style={{ marginBottom: '1rem' }} >
            Create Account
            </Button>
            <Collapse isOpen= { toggleCreate }>
            <h4 className="account-text">{ accountText }</h4>
            <InputGroup className="login-input">
                <InputGroupText >Username</InputGroupText>
                <Input className="login-input" id="email" onChange={handleChange} value={user.email} placeholder="email" />
            </InputGroup>
            <br />
            <InputGroup className="login-input">
                <InputGroupText >Password</InputGroupText>
                <Input className="login-input" id="password" type='password' onChange={handleChange} value={user.password} placeholder="password" />
            </InputGroup>
            <Button onClick={createAccount }> Create New Account</Button>
            </Collapse>
            </div>
            <div className="login-foot">
            </div>
        </div>
    )
}

export default Home