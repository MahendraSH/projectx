import React, { useEffect } from "react";
import { useAppDispatch } from "@/app/hooks";
import { setUser } from "@/app/features/userAuthSlice";
import { userResponse } from "@/app/features/authApiSlice";
import AuthLayout from "@/layouts/AuthLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoaderIcon } from "react-hot-toast";
import PageNotFound from "@/pages/PageNotFound";

const LazyMainLayout = React.lazy(() => import("@/layouts/MainLayout"));
const LazyLadingPage = React.lazy(() => import("@/pages/LadingPage"));
const LazyAboutUs = React.lazy(() => import("@/pages/AboutUs"));
const LazyFAQ = React.lazy(() => import("@/pages/FAQ"));
const LazySignIn = React.lazy(() => import("@/pages/auth/SignIn"));
const LazySignUp = React.lazy(() => import("@/pages/auth/SignUp"));
const LazyProductByIdPage = React.lazy(() => import("@/pages/ProductById"));
const LazyAccountPage = React.lazy(() => import("@/pages/AccountPage"));
const LazyCartPage = React.lazy(() => import("@/pages/CartPage"));
const LazyAuthOnlyLayout = React.lazy(() => import("@/layouts/AuthOnlyLayout"));
const LazyCheckOutPage = React.lazy(() => import("@/pages/CheckOutPage"));
const LazyLogoutPage = React.lazy(() => import("@/pages/LogoutPage"));
const App = () => {
  const dispatch = useAppDispatch();
  const user: userResponse = JSON.parse(
    localStorage.getItem("userDetails") || "{}",
  );

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <Routes>
      <Route
        element={
          <React.Suspense
            fallback={
              <div className="w-full flex justify-center items-center ">
                <LoaderIcon className="w-10 h-10 animate-spin" />
              </div>
            }
          >
            <LazyMainLayout />
          </React.Suspense>
        }
      >
        <Route path="/" element={<LazyLadingPage />} />
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LazySignIn />} />
          <Route path="/auth/register" element={<LazySignUp />} />
        </Route>
        <Route path="/about-us" element={<LazyAboutUs />} />
        <Route path="/faq" element={<LazyFAQ />} />
        <Route path="/product/:id" element={<LazyProductByIdPage />} />
        <Route
          element={
            <React.Suspense
              fallback={
                <div className="w-full flex justify-center items-center ">
                  <LoaderIcon className="w-10 h-10 animate-spin" />
                </div>
              }
            >
              <LazyAuthOnlyLayout />
            </React.Suspense>
          }
        >
          <Route path="/cart" element={<LazyCartPage />} />
          <Route
            path="/account"
            element={<Navigate to={"/account/profile"} />}
          />
          <Route path="/account/:pageId" element={<LazyAccountPage />} />
          <Route path="/checkout" element={<LazyCheckOutPage />} />
          <Route path="/logout" element={<LazyLogoutPage />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
