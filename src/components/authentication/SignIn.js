import { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../../context/AuthProvider'
//created globalstate with AuthContext 

const SignIn = () => {
    const { setAuth } = useContext(AuthContext)

    const userRef = useRef()
    const errRef = useRef()

    const[user, setUser]=useState('')
    const[pwd, setPwd] = useState('')
    const[errMsg, setErrMsg]= useState('')
    const[success, setSuccess]=useState(false)

    useEffect(()=> {
        userRef.current.focus()
    }, [])

    useEffect(()=> {
        setErrMsg('')
    }, [user, pwd])
    //clear out error messages when user/ pwd is changed 

    const handleSubmit = async (e)=> {
        e.preventDefault()
        const logInUrl="https://desolate-reaches-56728.herokuapp.com/api/users/signin"
        try{
        const response = await axios.post(logInUrl,({email:user, password:pwd}),
            {
                header:{'Content-Type':'application/json' },
                // withCredentials:true
            } 
        )
        console.log(response.data)
        const accessToken = response.data.accessToken
        setAuth({ email:user, password:pwd, accessToken:accessToken})
        console.log(response)
        setUser('')
        setPwd('')
        setSuccess(true)

        }catch(err){
            if(!err.response){
                setErrMsg('No Server Response')
            }else if (err.response.status === 400){
                setErrMsg('Missing username or password')
            }else if(err.response.status === 400 ){
                setErrMsg('Unauthorized')
            }
            errRef.current.focus()

        }
     
    }

    return ( 
        <>
        {success ? (
            <section>
                <h1> You are logged in! </h1>
                <br/>
                <p>
                    <Link to="/">Home</Link>
                </p>
            </section>
        ): (
       <section>
           <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
            {/* screen reader will read off error message when focus is set to this paragraph */}
           </p>
           <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"> Username:</label>
            <input
            type="text"
            id="username"
            ref={userRef}//set focus on this input
            autoComplete="off"
            onChange={(e)=>setUser(e.target.value)}
            //setting value to {user} makes this a controlled input
            value={user}
            required/> 

            <label htmlFor="password"> Password:</label>
            <input
            type="password"
            id="password"
            // we didint' create a ref for password because we don't want to set focus on pw field
            autoComplete="off"
            onChange={(e)=>setPwd(e.target.value)}
            //setting value to {user} makes this a controlled input
            value={pwd}
            required/> 
            <button className='signin-button'>Sign In</button>
        </form>
        <p> 
            Need an Account?<br/>
            <span className="line">
                <Link to="/signup">Sign Up</Link>
            </span>

        </p>
       </section>
        )}
       </>
     );
}
 
export default SignIn;