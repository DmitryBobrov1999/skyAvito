// import { apiSlice } from '../api/rtkQueryApi';

// export const authApiSlice = apiSlice.injectEndpoints({
// 	tagTypes: ['SpecificAd'],
// 	endpoints: builder => ({
// 		specificAd: builder.query({
// 			query: ({ id }) => `/ads/${id}`,
// 		}),
// 		providesTags: result =>
// 			result
// 				? [
// 						...result.map(({ id }) => ({ type: 'SpecificAd', id })),
// 						{ type: 'SpecificAd', id: 'LIST' },
// 				  ]
// 				: [{ type: 'SpecificAd', id: 'LIST' }],
// 	}),
// });

// export const { useSpecificAdQuery } = authApiSlice;
