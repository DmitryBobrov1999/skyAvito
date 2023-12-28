import { apiSlice } from './apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
	tagTypes: ['User'],
	endpoints: builder => ({
		getUser: builder.query({
			query: () => ({
				url: '/user',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			}),
			providesTags: result =>
				result
					? [({ id }) => ({ type: 'User', id }), { type: 'User', id: 'LIST' }]
					: [{ type: 'User', id: 'LIST' }],
		}),

		changeInfo: builder.mutation({
			query: credentials => ({
				url: '/user',
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
				body: { ...credentials },
			}),
			invalidatesTags: [{ type: 'User', id: 'LIST' }],
		}),
		changeAvatar: builder.mutation({
			query: ({ file }) => {
				const formData = new FormData();
				formData.append('file', file);
				return {
					url: '/user/avatar',
					method: 'POST',
					headers: {
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
					body: formData,
				};
			},
			invalidatesTags: [{ type: 'User', id: 'LIST' }],
		}),
	}),
});

export const { useChangeInfoMutation, useChangeAvatarMutation } = authApiSlice;
export default authApiSlice;
