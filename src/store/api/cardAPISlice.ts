import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {ResponseType} from "../../types/ResponseType";


export const cardAPISlice = createApi({
    reducerPath: 'cardAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getCards: builder.query<ResponseType, {}>({
            query: () => `campaigns`,
        })
    }),
});

export const { useGetCardsQuery } = cardAPISlice;
