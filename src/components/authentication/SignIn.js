    import { useRef, useState, useEffect } from 'react';
    import { Link, useNavigate, useLocation } from 'react-router-dom';
    import axios from 'axios';
    import useAuth from '../hooks/useAuth';

    const SignIn = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const logInUrl =
        'https://desolate-reaches-56728.herokuapp.com/api/users/signin';
        try {
        const response = await axios.post(
            logInUrl,
            { email: user, password: pwd },
            {
            header: { 'Content-Type': 'application/json' },
            // withCredentials:true
            }
        );
        console.log(response.data);
        const accessToken = response.data.accessToken;
        setAuth({ email: user, password: pwd, accessToken: accessToken });
        console.log(response);
        setUser('');
        setPwd('');
        navigate(from, { replace: true });
        } catch (err) {
        if (!err.response) {
            setErrMsg('No Server Response');
        } else if (err.response.status === 400) {
            setErrMsg('Missing username or password');
        } else if (err.response.status === 400) {
            setErrMsg('Unauthorized');
        }
        errRef.current.focus();
        }
    };

    return (
        <>
        <section>
            <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
            >
            {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username"> Username:</label>
            <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />

            <label htmlFor="password"> Password:</label>
            <input
                type="password"
                id="password"
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
            <button className="signup-button">Sign In</button>
            </form>
            <p className="already-signedup">
            Need an Account?
            <br />
            <span className="line">
                <Link className="signup-link-two" to="/signup">
                Sign Up
                </Link>
            </span>
            </p>
        </section>
        </>
    );
    };

    export default SignIn;
