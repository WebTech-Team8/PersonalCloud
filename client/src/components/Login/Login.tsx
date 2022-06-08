import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
    return (
        <div className="login-page">
            <div className="login-form">
                <form>
                    <h1 className="page-title">Login</h1>

                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <div className="submit-button">
                        <button type="submit">Login</button>
                    </div>

                    <p>
                        Don't have an account? <Link to="/register">Register</Link> right now.
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;