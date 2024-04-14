import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./features/authApiSlice";
import { promptApiSlice } from "./features/promtApiSlice";
import UserAuthReducer from "./features/userAuthSlice";
import { productApiSlice } from "./features/productApiSlice";
import colorsSlice from "./features/colorsSlice";
import loadingSlice from "./features/loadingSlice";
import sizeSlice from "./features/sizeSlice";
import productQuantity from "./features/productQuantity";
import { cartAndFavouritesApiSlice } from "./features/sessionApiSlice";
import { collectionApiSlice } from "./features/collectionsApiSlice";

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [promptApiSlice.reducerPath]: promptApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [cartAndFavouritesApiSlice.reducerPath]: cartAndFavouritesApiSlice.reducer,
    [collectionApiSlice.reducerPath]: collectionApiSlice.reducer,
    user: UserAuthReducer,
    color: colorsSlice,
    loading: loadingSlice,
    size: sizeSlice,
    quantity: productQuantity,
  },
  middleware: (gDM) =>
    gDM().concat(
      authApiSlice.middleware,
      promptApiSlice.middleware,
      productApiSlice.middleware,
      cartAndFavouritesApiSlice.middleware,
      collectionApiSlice.middleware,
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
