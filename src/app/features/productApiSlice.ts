import { createApi } from "@reduxjs/toolkit/query/react";
import { getAppBaseQuery } from "../apiHelper";
const api = import.meta.env.VITE_APP_API_URL;

interface Image {
  imageId: string;
  imageUrl: string;
  createdAt: number;
  metaData: MetaData;
}

interface MetaData {
  printType: string;
  gender: string;
  model: string;
  prompt: string;
  timestamp: number;
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
export const productApiSlice = createApi({
  reducerPath: "productApiSlice",

  baseQuery: getAppBaseQuery(api),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProductById: builder.query<Product, { productId: string }>({
      query: ({ productId }) => ({
        url: `/product/{productId}?productId=${productId}`,
      }),
    }),
  }),
});

export const { useGetProductByIdQuery } = productApiSlice;
