import { apiSlice } from './apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
	tagTypes: ['User'],
	endpoints: builder => ({
		getUser: builder.query({
			query: () => ({
				url: '/user',
				method: 'GET',
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

					body: formData,
				};
			},
			invalidatesTags: [{ type: 'User', id: 'LIST' }],
		}),
	}),
});

export const { useChangeInfoMutation, useChangeAvatarMutation } = authApiSlice;
export default authApiSlice;
