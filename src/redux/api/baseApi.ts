// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes: ["products"],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://mechanical-keyboard-shop-backend-six.vercel.app/api' }),
    endpoints: () => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
