import { API_KEY, API_BASE_URL } from "@/utils/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const showsApi = createApi({
  reducerPath: "showsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),

  endpoints: (builder) => ({
    getShows: builder.query({
      query: ({
        category,
        type,
      }: {
        category: string | undefined;
        type?: string;
      }) => {
        return `${category}/${type}?api_key=${API_KEY}`;
      },
    }),

    getShow: builder.query({
      query: ({ category, id }: { category: string; id: number }) =>
        `${category}/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetShowsQuery, useGetShowQuery } = showsApi;
