import { baseApi } from "../api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({ page, limit, searchTerm, minPrice, maxPrice, sortOrder }) => {
                const params = new URLSearchParams();

                if (page !== undefined) {
                    params.append('page', page);
                }

                if (limit !== undefined) {
                    params.append('limit', limit);
                }

                if (searchTerm) {
                    params.append('searchTerm', searchTerm);
                }

                if (minPrice) {
                    params.append('minPrice', minPrice);
                }

                if (maxPrice) {
                    params.append('maxPrice', maxPrice);
                }

                if (sortOrder) {
                    params.append('sort', sortOrder);
                }

                return {
                    url: '/products',
                    method: 'GET',
                    params: params,
                };
            },
            providesTags: ["products"],
        }),
        getProducts: builder.query({
            query: () => ({
                url: `/products`,
                method: 'GET',
            }),
            providesTags: ["products"],
        }),
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET',
            }),
            providesTags: ["products"],
        }),
        updateProduct: builder.mutation({
            query: ({ id, updateData }) => ({
                url: `/products/${id}`,
                method: 'PATCH',
                body: updateData
            }),
            invalidatesTags: ["products"],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',

            }),
            invalidatesTags: ["products"],
        }),
        addProduct: builder.mutation({
            query: (productData) => ({
                url: '/products/create-products',
                method: 'POST',
                body: productData
            }),
            invalidatesTags: ["products"],
        })
    }),
});

export const { useGetAllProductsQuery, useGetProductsQuery, useAddProductMutation, useGetSingleProductQuery, useUpdateProductMutation, useDeleteProductMutation } = productsApi;
