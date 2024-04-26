import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import ItemDetail from "./Components/ItemDetail";
import Cart from "./Components/Cart";
import ListingPage from "./Components/ListingPage";
import Home from "./Components/Home";

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "list",
        element: <ListingPage />,
      },
      {
        path: "/dashboard/:id",
        element: <ItemDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
