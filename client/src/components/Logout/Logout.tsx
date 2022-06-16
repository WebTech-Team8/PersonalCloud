import React from 'react';
import { useHistory } from 'react-router-dom';
import notificationsService from '../../services/notifications.service';
import userService from '../../services/user.service';

const Logout = () => {
    const history = useHistory();
    const refreshToken = localStorage.getItem('refresh-token') || '';
    userService.logout({ token: refreshToken }).then(res => {
        if(res.error) {
            notificationsService.showError(res.error);
            return;
        }

        localStorage.removeItem('auth-token');
        localStorage.removeItem('refresh-token');

        notificationsService.showSuccess('Logged out successfully!')

        history.push('/');
    }).catch(err => {
        console.log(err);
    });

    return <div>Logged out</div>;
}

export default Logout;