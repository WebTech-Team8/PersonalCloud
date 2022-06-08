import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { HeaderComponentProps } from './Header.props';
import './Header.css'

const Header: React.FC<HeaderComponentProps> = ({ isLogged }: HeaderComponentProps) => {
    return (
        <header className="site-header">
            <div className="wrapper">
            <div className="site-branding">
                <Link to="/">
                    <p className="site-title">Personal</p>
                    <p className="site-subtitle">Cloud</p>
                </Link>
            </div>
            <Navigation isLogged={isLogged} />
        </div>
        </header>
    )
}

export default Header; 