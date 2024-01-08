import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/mainPage/MainPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { RegPage } from './pages/regPage/RegPage';
import { ProfilePage } from './pages/profilePage/MyProfilePage';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';

import { AdPage } from './pages/adPage/AdPage';
import { SellerProfilePage } from './pages/sellerProfilePage/SellerProfilePage';


export const AppRoutes = () => {

	

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute />}>
					<Route
						path='/profile'
						element={
							<ProfilePage
								
							/>
						}
					/>
				</Route>

				<Route path='/' element={<MainPage />} />
				<Route path='/seller/:id' element={<AdPage />} />
				<Route path='/seller/:id/:user_id' element={<SellerProfilePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/reg' element={<RegPage />} />
			</Routes>
		</BrowserRouter>
	);
};
