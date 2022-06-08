import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavigationComponentProps } from './Navigation.props';

const Navigation: React.FC<NavigationComponentProps> = ({ isLogged }) => {
    return (
        <nav className="site-nav">
            {isLogged ?
                <ul>
                    <li><Link to="/logout">Logout</Link></li>
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