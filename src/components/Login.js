import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(false)

    const toggleSignupForm = ()=>{
        setIsSignInForm(!isSignInForm)

    }
    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_medium.jpg' 
                alt='bg image'
                >
                </img>
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  bg-opacity-80'> 
            <h1 className='font-bold text-xl py-4 text-white' >{isSignInForm ?"Sign In" :"Sign Up"}</h1>
                {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-2 m-2'/>)}
                <input type="text" placeholder='Email' className='p-2 m-2'/>
                <input type='password' placeholder='password' className='p-2 m-2'/>
                <button className='p-4 m-4 bg-red-700 w-full'>{isSignInForm ?"Sign In" :"Sign Up"}</button>
                <p className='py-4' onClick={toggleSignupForm}>{isSignInForm?"If you are new to netflix? Sign up now":"You are already Sign In"}</p>
            </form>
        </div>
    );
}

export default Login;
