import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockBaseQuery } from "./mockBaseQuery";

export const getAppBaseQuery = (baseUrl: string) => {
  // If VITE_APP_USE_MOCK_API is "true" OR if there is no VITE_APP_API_URL defined,
  // use the in-browser mock baseQuery. This makes the frontend fully autonomous for portfolios.
  const useMock = import.meta.env.VITE_APP_USE_MOCK_API === "true" || !baseUrl;

  if (useMock) {
    return mockBaseQuery;
  }

  return fetchBaseQuery({
    baseUrl,
    validateStatus: () => true,
  });
};
