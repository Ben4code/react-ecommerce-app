import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/signIn/signIn'
import Signup from '../../components/signUp/signUp'

const Auth = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <Signup/>
        </div>
    )
}

export default Auth;