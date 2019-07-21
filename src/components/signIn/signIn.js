import React, { Component } from 'react'
import FormInput from '../form-input/formInput'
import CustomButton from '../custom-button/customButton'
import './signIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <p>Sign in with your email and password.</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required
                        handleChange={this.handleChange}
                        label="Email"
                    />
                    <FormInput type="password" name="password" value={this.state.password} required handleChange={this.handleChange} label="Password"
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;