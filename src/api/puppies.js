// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const puppyBowlAPI = createApi({
  reducerPath: 'puppyBowlAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players' }),
  endpoints: (builder) => ({
    getAllPlayers: builder.query({
      query: () => `/`,
    }),
    addPlayer: builder.mutation({
        query: (newPlayer) => ({
            url: 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players',
            method: 'POST',
            body: newPlayer,
        }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPlayersQuery, useAddPlayerMutation } = puppyBowlAPI