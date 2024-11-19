import React from 'react'
import './Signin.css';
const Signin = () => {
    return (
        <div className='signin-container'>
            <div className="wrapper-signin">
                <h1 className="signin-title">Sign In</h1>
                <h2 className="signin-subtitle">To Continue To BsOomTube</h2>
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <button className='signin-btn'>Sign In</button>
                <h1 className="signin-title">or</h1>
                <input type="text" placeholder='username' />
                <input type="email" placeholder='your email' />
                <input type="password" placeholder='password' />
                <button className='signin-btn'>Sign In</button>
            </div>
                <div className="more-signin">
                    Engilsh(USA)
                    <div className="links-signin">
                        <span className='signin-link'>Help</span>
                        <span className='signin-link'>Privacy</span>
                        <span className='signin-link'>Terms</span>
                    </div>
                </div>
        </div>
    )
}

export default Signin
