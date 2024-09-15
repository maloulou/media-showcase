import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { showsApi } from "@/services/shows";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={showsApi}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
