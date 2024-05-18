import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/app/store.ts";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/providers/theme-provider.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "@fontsource-variable/inter";
import { Toaster } from "react-hot-toast";
import { app } from "@/firebaseConfig.ts";
import { siteConfig } from "./utils/site-config.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Helmet>
              <title>{siteConfig.name}</title>
              <meta name="description" content={siteConfig.description} />
              <meta
                name="og:title"
                property="og:title"
                content={siteConfig.name}
              />
              <meta name="robots" content={siteConfig.description} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta
                http-equiv="Content-Type"
                content="text/html; charset=utf-8"
              />
              <link rel="canonical" href={siteConfig.url} />
              <meta name="language" content="English" />
              <meta name="author" content="lorem" />

              {/* Open Graph / Facebook --> */}
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://projectx-dev.vercel.app/"
              />
              <meta
                property="og:description"
                content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
              />
              <meta
                property="og:image"
                content="https://projectx-dev.vercel.app/og.png"
              />

              {/* Twitter */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta
                property="twitter:url"
                content="https://projectx-dev.vercel.app/"
              />
              <meta
                property="twitter:description"
                content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
              />
              <meta
                property="twitter:image"
                content="https://projectx-dev.vercel.app/og.png"
              />
            </Helmet>
            <section className="lg:px-20 bggrad w-full h-full">
              <App />
            </section>
            <Toaster
              gutter={10}
              position="bottom-center"
              toastOptions={{
                className:
                  "bg-background text-foreground min-w-96 p-2 border-2 text-lg font-semibold text-pretty",
                duration: 5000,
              }}
            />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
