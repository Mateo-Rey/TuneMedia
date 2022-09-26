import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: () => {
      headers.set(
        "x-rapidapi-key",
        "f82da078f5msh3d200476cc32826p1206fajsn07dc6a3a4188"
      )


      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: '/charts/world '})
  })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi