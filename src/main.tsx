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
import { siteConfig } from "./utils/site-config.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Helmet>
              <title>{siteConfig.name}</title>
              <meta name="description" content={siteConfig.description} />
              <link rel="canonical" href={siteConfig.url} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta
                http-equiv="Content-Type"
                content="text/html; charset=utf-8"
              />

              {/* Open Graph Meta Tags */}
              <meta property="og:title" content={siteConfig.name} />
              <meta
                property="og:description"
                content={siteConfig.description}
              />
              <meta property="og:url" content={siteConfig.url} />
              <meta property="og:image" content={`${siteConfig.url}/og.png`} />
              <meta property="og:type" content="website" />

              {/* Twitter Meta Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:url" content={siteConfig.url} />
              <meta name="twitter:title" content={siteConfig.name} />
              <meta
                name="twitter:description"
                content={siteConfig.description}
              />
              <meta
                name="twitter:image"
                content={`${siteConfig.url}/twitter-og.png`}
              />

              {/* Additional SEO Meta Tags */}
              <meta name="author" content="Shirt-ai" />
              <meta name="robots" content="index,follow" />
              <meta name="language" content="English" />
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
