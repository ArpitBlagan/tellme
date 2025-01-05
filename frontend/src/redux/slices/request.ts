import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseUrl = "";

const requestApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl, credentials: "include" }),
  endpoints: (builder) => ({
    // getFriendRequest:builder.query({}),
    // updateFriendRequest:builder.mutation({}),
  }),
});

export default requestApi;
