import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = import.meta.env.VITE_APP_API_URL;

export interface PromptRequest {
  prompt: string;
  gender: string;
  category: string;
  printType: string;
}

export interface PromptResponse {
  productId: string;
  productType: string;
  title: string;
  price: number;
  description: string;
  category: string;
  images: {
    imageId: string;
    imageUrl: string;
    createdAt: number;
    metaData: {
      printType: string;
      gender: string;
      model: string;
      prompt: string;
      timestamp: number;
    };
  }[];
  rating: number | null;
  prompt: string;
  image: {
    imageId: string;
    imageUrl: string;
    createdAt: number;
    metaData: {
      printType: string;
      gender: string;
      model: string;
      prompt: string;
      timestamp: number;
    };
  };
  gender: string;
}

export const promptApiSlice = createApi({
  reducerPath: "promptApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: api, validateStatus: () => true }),

  tagTypes: ["prompt"],
  endpoints: (builder) => ({
    promptWithoutAuth: builder.mutation<PromptResponse, PromptRequest>({
      query: (requestData: PromptRequest) => ({
        url: "/ai/generate",
        method: "POST",
        body: requestData,
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
      }),
    }),
  }),
});

export const { usePromptWithoutAuthMutation } = promptApiSlice;
