import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: null,
		isAuth: Boolean(localStorage.getItem('access_token')),
	},
	reducers: {
		setCredentials: (state, action) => {
			state.token = action.payload;
		},
		logOut: state => {
			state.token = null;
		},
		setAuth: (state, action) => {
			state.isAuth = Boolean(localStorage.getItem('access_token'));
		},
	},
});

export const { setCredentials, logOut, setAuth } = authSlice.actions;

export default authSlice.reducer;