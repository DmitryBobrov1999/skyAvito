import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ token }) => {
	if (!token) {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		return <Navigate to='/login' />;
	}

	return <Outlet />;
};
