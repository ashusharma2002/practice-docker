import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const signIn = (e) => {
        e.preventDefault();
    }
    return (
        <div className='loginPage'>
            <Link to={'/'}>
                < img className="loginPage_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="loginPage_form">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email or mobile phone number</h5>
                    <input type="text" value={email} onClick={(e) => setEmail(e.target.value)} />
                    <h5>Pssword</h5>
                    <input type="password" value={password} onClick={(e) => setpassword(e.target.value)} />
                    <button className='loginPage_signInButton' type='submit' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to={'/signin'}>
                    <button className='loginPage_button' type='submit' >Create your Amazon Account</button>
                </Link>
            </div>
        </div >
    )
}

export default Login