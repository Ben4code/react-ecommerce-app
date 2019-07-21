import React from 'react'
import './custom-button.styles.scss'


export default function CustomButton({children, isGoogleSignIn, ...otherProps}) {
    return (
        <div>
            <button className={` ${isGoogleSignIn ? 'google-siginIn' : ''} custom-button`} {...otherProps}> 
                {children}
            </button>
        </div>
    )
}
