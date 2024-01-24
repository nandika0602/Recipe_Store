import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import ItemDetail from "./ItemDetail";
import Cart from "./Cart";
import ListingPage from "./ListingPage";

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/",
    element: <Body />,
    children: [
      // {
      //   path: "/dashboard/:id",
      //   element: <ItemDetail/>
      // },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "list",
        element: <ListingPage/>
      },
      {
        path: "/dashboard/:id",
        element: <ItemDetail/>
      },
    ]
  },
  // {
  //   path: "/dashboard/:id",
  //   element: <ItemDetail/>
  // },
  // {
  //   path: "/cart",
  //   element: <Cart/>
  // }
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
