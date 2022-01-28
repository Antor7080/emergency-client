import React from 'react';
import { Alert } from 'react-bootstrap';

import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useFirebase();
    let location = useLocation();
    if (isLoading) {
        return <Alert variant="success">
            Loading....................
        </Alert>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default PrivateRoute;