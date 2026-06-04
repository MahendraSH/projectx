import { createApi } from "@reduxjs/toolkit/query/react";
import { getAppBaseQuery } from "../apiHelper";

const api = import.meta.env.VITE_APP_API_URL;

export interface userRequest {
  email: string;
  password: string;
  returnSecureToken: boolean;
}
export interface userResponse {
  kind?: string;
  localId?: string;
  email: string;
  displayName: string;
  idToken: string;
  registered?: string;
  refreshToken: string;
  expiresId?: string;
}

export const authApiSlice = createApi({
  reducerPath: "authApiSlice",
  baseQuery: getAppBaseQuery(api),

  tagTypes: ["auth"],
  endpoints: (builder) => ({
    singInAuth: builder.mutation<userResponse, userRequest>({
      query: (user: userRequest) => ({
        url: "/auth/signIn",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    signUpAuth: builder.mutation<userResponse, userRequest>({
      query: (user: userRequest) => ({
        url: "/auth/signUp",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useSingInAuthMutation, useSignUpAuthMutation } = authApiSlice;
