import React from 'react';
import { Alert } from 'react-bootstrap';
import { Routes, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useFirebase();
    let location = useLocation();
    if (isLoading) {
        return <Alert variant="success">
            Loading....................
        </Alert>
    }
    if (admin && user?.email) {
        return children;
    }
    console.log(admin);
    return <Routes {...rest}
        render={
            ({ location }) => user.email && admin ? children : <Navigate to="/login" state={{ from: location }} />
        }
    ></Routes>


};

export default AdminRoute;