import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://shopping-website-backend.glitch.me`}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/api/products"
        })
    })
})

export const { useGetAllProductsQuery } = productApi