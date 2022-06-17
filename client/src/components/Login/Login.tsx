import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import notificationsService from '../../services/notifications.service';
import userService from '../../services/user.service';
import { formComponent } from '../shared/hocs/formComponent';
import { IFormComponentProps } from '../shared/types.forms';
import './Login.css';

const Login: React.FC<IFormComponentProps> = ({ controlChangeHandlerFactory, getFormState }) => {
    // Using React Hook for accessing the history so we can redirect
    const history = useHistory();

    // On change input handlers
    const emailOnChangeHandler = controlChangeHandlerFactory('email');
    const passwordOnChangeHandler = controlChangeHandlerFactory('password');

    const submitHandler = async () => {
        const formData = getFormState();

        userService.login(formData).then(res => {
            if (res.error) {
                // Showing error notification if error occurs
                notificationsService.showError(res.error);
                return;
            }
            // Saving the access token in the local storage of the browser
            localStorage.setItem('auth-token', res.accessToken);
            localStorage.setItem('refresh-token', res.refreshToken);

            // Showing success notification after successful sign in
            notificationsService.showSuccess('Logged in successfully!')

            // Redirect to home page after successful signing in
            history.push('/');
        }).catch(err => {
            console.error(err);
        });
    }

    return (
        <div className="login-page">
            <div className="login-form">
                <form>
                    <h1 className="page-title">Login</h1>

                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={emailOnChangeHandler} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={passwordOnChangeHandler} />
                    </div>

                    <div className="submit-button">
                        <button type="button" onClick={submitHandler}>Login</button>
                    </div>

                    <p>
                        Don't have an account? <Link to="/register">Register</Link> right now.
                    </p>
                </form>
            </div>
        </div>
    );
}

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    folderName: ''
}

export default formComponent(Login, initialFormState);