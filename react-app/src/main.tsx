import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";

import { UserProvider } from "./context/UserContext";

import { TransactionProvider } from "./context/TransactionContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <TransactionProvider>
            <App />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
              }}
            />
          </TransactionProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
