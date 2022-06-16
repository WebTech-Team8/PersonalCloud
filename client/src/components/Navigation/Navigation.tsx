import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavigationComponentProps } from './Navigation.props';
import userService from '../../services/user.service';
import './Navigation.css'

const Navigation: React.FC<NavigationComponentProps> = ({ isLogged }) => {
    const [userName, setVal] = useState();

    const getUserName = async () => {
        const token = localStorage.getItem('auth-token') || '';
        const userName = (await userService.getUser(token)).firstName;
        setVal(userName);
    };

    useEffect(() => {
        if (isLogged) {
            getUserName();
        }
    });

    return (
        <nav className="site-nav">
            {isLogged ?
                <ul>
                    <li><Link to="/logout">Logout, {userName}</Link></li>
                </ul>
                :
                <ul>
                    <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                    <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>
                </ul>
            }
        </nav>
    );
}

export default Navigation; 