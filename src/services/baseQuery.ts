import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const publicBaseQuery = fetchBaseQuery({
  baseUrl: 'https://api.escuelajs.co/api/',
});
