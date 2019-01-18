import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';


const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}


class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: '',
            termsandconditions: '',
            formErrors: {
                username: '',
                password: '',
                email: '',
                firstname: '',
                lastname: '',
                terms: ''
            }
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
}
    
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        if (formValid(this.state.formErrors)) {
            console.log(`
            --SUBMITTING--
            User Name: ${this.state.username}
            Password: ${this.state.password}
            Email: ${this.state.email}
            First Name: ${this.state.firstname}
            Last Name: ${this.state.lastname}
            Terms: ${this.state.terms}
            `)
        } else {
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE')
        }
    };



    render() {
        return (
            <div>
            <Toolbar/>
            <form onSubmit={this.onSubmit}>               
                <h4>Create Account</h4>
                <div className="form-group">
                    <label className="control-label">Username
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        className="form-control"
                    />
                    </label>
                    <label className="control-label">Password
                    <input
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                    </label>
                    <label className="control-label">Email
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="email"
                        name="email"
                        className="form-control"
                    />
                    </label>
                    <label className="control-label">First Name
                    <input
                        value={this.state.firstname}
                        onChange={this.onChange}
                        type="text"
                        name="firstname"
                        className="form-control"
                    />
                    </label>
                    <label className="control-label">Last Name
                    <input
                        value={this.state.lastname}
                        onChange={this.onChange}
                        type="text"
                        name="lastname"
                        className="form-control"
                    />
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="terms"
                    />
                    <span>I agree to MYtinerary's Terms and Conditions</span>
                    </label>
                </div>
                <div className="form-group">
                <button className="btn btn primary btn-lg">OK</button>
                </div>
            </form>
        </div>
        )
    }
}

export default AccountForm;