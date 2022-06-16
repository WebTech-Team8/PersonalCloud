import React from 'react';
import './Notifications.css';

const Notifications: React.FC = () => {
    return (
        <div id="notifications">
            <div id="errorBox" className="notification">
                <span>Error</span>
            </div>
            <div id="successBox" className="notification">
                <span>Success</span>
            </div>
        </div>
    );
}

export default Notifications;