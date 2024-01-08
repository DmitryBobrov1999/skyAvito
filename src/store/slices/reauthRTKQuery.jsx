import {  fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from './authSlice';

export const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:8090',
	credentials: 'include',
	headers: {
		Authorization: `Bearer ${localStorage.getItem('access_token')}`,
	},
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;

		if (token?.access_token) {
			headers.set('Authorization', `Bearer ${token?.access_token}`);
		}
		return headers;
	},
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.status === 401) {
		const refreshResult = await baseQuery(
			{
				url: '/auth/login',
				method: 'PUT',
				body: {
					access_token: localStorage.getItem('access_token'),
					refresh_token: localStorage.getItem('refresh_token'),
				},
			},
			api,
			extraOptions
		);

		if (refreshResult?.data) {
			api.dispatch(setCredentials(refreshResult.data));
			localStorage.setItem('access_token', refreshResult?.data.access_token);
			localStorage.setItem('refresh_token', refreshResult?.data.refresh_token);
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}
	return result;
};
