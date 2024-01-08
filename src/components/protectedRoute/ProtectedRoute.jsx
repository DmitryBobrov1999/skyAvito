import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
	const { isAuth } = useSelector(state => state.auth);
	
	if (isAuth === false) {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('myId');
		return <Navigate to='/login' />;
	}

	return <Outlet />;
};
