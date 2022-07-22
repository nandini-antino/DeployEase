import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
	const auth = localStorage.getItem('t_id');
	return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
