import React from 'react';
import { useHistory } from 'react-router-dom';
import userService from '../../services/user.service';

const Logout = () => {
    const history = useHistory();
    const refreshToken = localStorage.getItem('refresh-token') || '';
    userService.logout({ token: refreshToken }).then(res => {
        if(res.error) {
            console.log(res.error);
            return;
        }

        localStorage.removeItem('auth-token');
        localStorage.removeItem('refresh-token');

        history.push('/');
    }).catch(err => {
        console.log(err);
    });

    return <div>Logged out</div>;
}

export default Logout;