import React from 'react';
import { DropdownProps } from './Dropdown.props';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Dropdown: React.FC<DropdownProps> = ({ btnName, options }) => {
    return (
        <div className="dropdown">
            <button className="dropdown-btn">{btnName} <FontAwesomeIcon icon={faCaretDown} /></button>
            <div className="dropdown-content">
                { options.map(o => <Link to='#' onClick={o.onclick} key={o.name}>{o.name}</Link>) }
            </div>
        </div>
    );
}

export default Dropdown;