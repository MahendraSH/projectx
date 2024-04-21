import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = import.meta.env.VITE_APP_API_URL;

interface Image {
  imageId: string;
  imageUrl: string;
  createdAt: number;
}

interface Product {
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

interface ProductMeta {
  size: string;
  gender: string;
  color: string | null;
}

export interface Entry {
  productId: string;
  product: Product;
  productMeta: ProductMeta;
  quantity: number;
}

export interface Bucket {
  entries: Entry[];
  bucketSize: number;
}

export interface ApiResponse {
  favouriteEntries: Bucket;
  cartEntries: Bucket;
}

export interface AddToCartRequest {
  productId: string;
  productMeta: ProductMeta;
  quantity: number;
}

export interface AddToFavouritesRequest {
  productId: string;
  productMeta: ProductMeta;
  quantity: number;
}

export const cartAndFavouritesApiSlice = createApi({
  reducerPath: "cartAndFavouritesApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: api, validateStatus: () => true }),

  tagTypes: ["cart", "favourites"],
  endpoints: (builder) => ({
    addToCart: builder.mutation<
      ApiResponse,
      { req: AddToCartRequest; token: string }
    >({
      query: ({ req, token }) => ({
        url: "/session/add/cart",
        method: "POST",
        body: req,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["cart"],
    }),
    addToFavourites: builder.mutation<
      ApiResponse,
      { req: AddToFavouritesRequest; token: string }
    >({
      query: ({ req, token }) => ({
        url: "/session/add/favourites",
        method: "POST",
        body: req,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["favourites"],
    }),
    getSessionData: builder.query<ApiResponse, { token: string }>({
      query: ({ token }) => ({
        url: "/session/session",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }),
      providesTags: (result) => [
        { type: "cart", id: "cart" },
        { type: "favourites", id: "favourites" },
      ],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useAddToFavouritesMutation,
  useGetSessionDataQuery,
} = cartAndFavouritesApiSlice;
