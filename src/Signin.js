import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'

function Signin() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
    }
    return (
        <div className='signinPage'>
            <Link to={'/'}>
                < img className="signinPage_img"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className="signinPage_form">
                <h1>Create Account</h1>
                <form action="">
                    <h5>Your name</h5>
                    <input type="text" value={name} placeholder='  Your first and last name' onClick={(e) => setName(e.target.value)} />
                    <h5>Email</h5>
                    <input type="text" value={email} placeholder='  Email' onClick={(e) => setEmail(e.target.value)} />
                    <h5>Pssword</h5>
                    <input type="password" value={password} placeholder='  At least 6 characters' onClick={(e) => setpassword(e.target.value)} />
                </form>
                <p>
                    By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.
                </p>
                <Link to={'/signin'}>
                    <button className='signinPage_button' type='submit' >Create New Account</button>
                </Link>
                <h5>
                    Already have an account?
                    <Link to={'/login'} className='signinPage_signinButton'>
                        Sign in
                    </Link>
                </h5>
                <p>By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.</p>
            </div>
        </div >
    )
}

export default Signin