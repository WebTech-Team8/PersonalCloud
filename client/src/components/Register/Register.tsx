import React from 'react';
import './Register.css'
import '../shared/styles.forms.css'
import { formComponent } from '../shared/hocs/formComponent';
import { IFormComponentProps } from '../shared/types.forms';
import userService from '../../services/user.service';
import { useHistory } from 'react-router-dom';
import notificationsService from '../../services/notifications.service';

const Register: React.FC<IFormComponentProps> = ({ controlChangeHandlerFactory, getFormState }) => {
    // Using React Hook for accessing the history so we can redirect
    let history = useHistory();

    // On change input handlers
    const firstNameOnChangeHandler = controlChangeHandlerFactory('firstName');
    const lastNameOnChangeHandler = controlChangeHandlerFactory('lastName');
    const emailOnChangeHandler = controlChangeHandlerFactory('email');
    const usernameOnChangeHandler = controlChangeHandlerFactory('username');
    const passwordOnChangeHandler = controlChangeHandlerFactory('password');
    const confirmPasswordOnChangeHandler = controlChangeHandlerFactory('confirmPassword');

    const submitHandler = async () => {
        const formData = getFormState();

        if (formData.password !== formData.confirmPassword) {
            notificationsService.showError('Passwords do not match!');
            return;
        }
        userService.register(formData).then(res => {
            if (res.error) {
                // Showing error notification if error occurs
                notificationsService.showError(res.error);
                return;
            }

            // Saving the access token in the local storage of the browser
            localStorage.setItem('auth-token', res.accessToken);
            localStorage.setItem('refresh-token', res.refreshToken);

            // Showing success notification after successful registration
            notificationsService.showSuccess('Registered successfully.')

            // Redirect to home page after successful registration
            history.push('/');
        }).catch(err => {
            console.error(err);
        });
    }

    return (
        <div className="register-page">
            <div className="register-form">
                <form>
                    <h1 className="page-title">Register</h1>

                    <div className="form-control required">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" onChange={firstNameOnChangeHandler} />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" onChange={lastNameOnChangeHandler} />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={emailOnChangeHandler} />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" onChange={usernameOnChangeHandler} />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={passwordOnChangeHandler} />
                    </div>

                    <div className="form-control required">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" onChange={confirmPasswordOnChangeHandler} />
                    </div>

                    <div className="submit-button">
                        <button type="button" onClick={submitHandler}>Register</button>
                    </div>
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

export default formComponent(Register, initialFormState);