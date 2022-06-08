import React from 'react';
import './Register.css'
import '../shared/styles.forms.css'

const Register: React.FC = () => {
    return (
        <div className="register-page">
            <div className="register-form">
                <form>
                    <h1 className="page-title">Register</h1>

                    <div className="form-control required">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" />
                    </div>

                    <div className="submit-button">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;