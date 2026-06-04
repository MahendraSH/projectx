import { createApi } from "@reduxjs/toolkit/query/react";
import { getAppBaseQuery } from "../apiHelper";

// Define the API base URL
const apiUrl = import.meta.env.VITE_APP_API_URL;

// Define interfaces for types used in the API responses
interface Image {
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
}

export interface Product {
  productId: string;
  productType: string;
  title: string;
  price: number;
  description: string;
  category: string;
  images: Image[];
  rating: number | null;
  prompt: string;
  image: Image;
  gender: string;
}

export interface Collection {
  collectionId: string;
  name: string;
  description: string;
  active: boolean;
  products: Product[];
  createdAt: number;
}

// Create the API slice
export const collectionApiSlice = createApi({
  reducerPath: "collectionApi",
  baseQuery: getAppBaseQuery(apiUrl),

  endpoints: (builder) => ({
    getActiveCollections: builder.query<Collection[], void>({
      query: () => "/collection/active",
    }),
  }),
});

// Extract the hooks for the API endpoints
export const { useGetActiveCollectionsQuery } = collectionApiSlice;
