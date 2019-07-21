import React, { Component } from 'react'
import FormInput from '../form-input/formInput'
import CustomButton from '../custom-button/customButton'
import {auth, createUserProfileDocument} from '../../firebase/firebase.util'
import './sign-up.styles.scss'




export default class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    onSubmitHandler = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            console.log("Passwords do not match.")
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.error(error)
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name] : value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have abn account.</h2>
                <span>Sign up with your email amnd password.</span>

                <form onSubmit={this.onSubmitHandler} className="sign-up-form"> 
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required/>

                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Display Email" required/>

                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required/>

                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required/>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
