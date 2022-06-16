import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ProtectedRouteProps } from './ProtectedRoute.props';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLogged, redirectTo, ...props }) => {
    return isLogged ? <Route {...props} /> : <Redirect to={redirectTo} />
}

export default ProtectedRoute;