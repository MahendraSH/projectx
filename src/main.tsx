import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/app/store.ts";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/providers/theme-provider.tsx";
// Supports weights 100-900
import "@fontsource-variable/inter";
import { Toaster } from "react-hot-toast";
import { app } from "@/firebaseConfig.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <App />
          <Toaster
            gutter={10}
            position="bottom-center"
            toastOptions={{
              className:
                " bg-background text-foreground min-w-96 p-2 border-2   text-lg font-semibold text-pretty ",
              duration: 5000,
            }}
          />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
