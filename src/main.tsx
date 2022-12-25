import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import store from "./app/store.js";
import { RouterProvider } from "react-router-dom";
import routes from "./route";
import AppState from "./app/state/AppState";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <AppState>
        <RouterProvider router={routes} />
      </AppState>
    </Provider>
  </React.StrictMode>
);
