import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg.svg'
import {auth} from '../../firebase/firebase.util';

import './header.styles.scss'

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                <div className="option" style={{cursor: 'pointer'}} onClick={()=> auth.signOut()}> SIGN OUT</div>
                :
                <Link className="option" to="/auth">SIGNIN</Link>
            }
        </div>
        
        
        
    </div>
)

export default Header;