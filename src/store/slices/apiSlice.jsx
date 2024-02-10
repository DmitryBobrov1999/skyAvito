import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./reauthRTKQuery";

export const apiSlice = createApi({
	reducerPath: 'apiSlice',
	tagTypes: ['MyAds', 'AllAds', 'SpecificAd', 'Comments', 'SellerAds'],
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({
		getAds: builder.query({
			query: () => `/ads`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'AllAds', id })),
							{ type: 'AllAds', id: 'LIST' },
					  ]
					: [{ type: 'AllAds', id: 'LIST' }],
		}),
		myAds: builder.query({
			query: () => {
				return {
					url: `/ads/me`,
					
				};
			},
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'MyAds', id })),
							{ type: 'MyAds', id: 'LIST' },
					  ]
					: [{ type: 'MyAds', id: 'LIST' }],
		}),
		specificAd: builder.query({
			query: ({ id }) => `/ads/${id}`,
			providesTags: result =>
				result
					? [
							({ id }) => ({ type: 'SpecificAd', id }),
							{ type: 'SpecificAd', id: 'LIST' },
					  ]
					: [{ type: 'SpecificAd', id: 'LIST' }],
		}),

		postAd: builder.mutation({
			query: ({ title, description, price }) => {
				return {
					url: `/adstext`,
					method: 'POST',
					body: {
						title,
						description,
						price,
					},
				};
			},
			invalidatesTags: [
				{ type: 'MyAds', id: 'LIST' },
				{ type: 'AllAds', id: 'LIST' },
				{ type: 'SpecificAd', id: 'LIST' },
			],
		}),
		postImg: builder.mutation({
			query: ({ files, specificAd }) => {
				const formData = new FormData();
				formData.append('file', files);

				return {
					url: `/ads/${specificAd.id}/image`,
					method: 'POST',
					body: formData,
				};
			},
			invalidatesTags: [
				{ type: 'MyAds', id: 'LIST' },
				{ type: 'AllAds', id: 'LIST' },
				{ type: 'SpecificAd', id: 'LIST' },
			],
		}),
		deleteImg: builder.mutation({
			query: ({ files, specificAd }) => {
				return {
					url: `/ads/${specificAd.id}/image?file_url=${files?.url}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: [
				{ type: 'MyAds', id: 'LIST' },
				{ type: 'AllAds', id: 'LIST' },
				{ type: 'SpecificAd', id: 'LIST' },
			],
		}),
		deleteAd: builder.mutation({
			query: ({ specificAd }) => {
				return {
					url: `/ads/${specificAd.id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: [
				{ type: 'MyAds', id: 'LIST' },
				{ type: 'AllAds', id: 'LIST' },
			],
		}),

		editAd: builder.mutation({
			query: ({ title, description, price, specificAd }) => {
				return {
					url: `/ads/${specificAd.id}`,
					method: 'PATCH',

					body: {
						title,
						description,
						price,
					},
				};
			},
			invalidatesTags: [{ type: 'SpecificAd', id: 'LIST' }],
		}),
		comments: builder.query({
			query: ({ id }) => `/ads/${id}/comments`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Comments', id })),
							{ type: 'Comments', id: 'LIST' },
					  ]
					: [{ type: 'Comments', id: 'LIST' }],
		}),
		addComment: builder.mutation({
			query: ({ specificAd, text }) => ({
				url: `/ads/${specificAd?.id}/comments`,
				method: 'POST',
				body: {
					text: text,
				},
			}),
			invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
		}),
		sellerAds: builder.query({
			query: ({ user_id }) => `/ads?user_id=${user_id}`,
		}),
		providesTags: result =>
			result
				? [
						...result.map(({ id }) => ({ type: 'SellerAds', id })),
						{ type: 'SellerAds', id: 'LIST' },
				  ]
				: [{ type: 'SellerAds', id: 'LIST' }],
	}),
});

export const {
	useGetAdsQuery,
	usePostAdMutation,
	useDeleteAdMutation,
	useMyAdsQuery,
	useSpecificAdQuery,
	useEditAdMutation,
	useCommentsQuery,
	useAddCommentMutation,
	usePostImgMutation,
	useDeleteImgMutation,
	useSellerAdsQuery,
} = apiSlice;

export default apiSlice;