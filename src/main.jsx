import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./css/main/index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import UserContext from "./utiles/context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContext>
        <RouterProvider router={router}></RouterProvider>
      </UserContext>
    </Provider>
  </React.StrictMode>
);
