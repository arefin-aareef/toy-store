import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import AllToys from "./components/AllToys/AllToys";
import MyToys from "./components/MyToys/MyToys";
import AddToys from "./components/AddToys/AddToys";
import Blogs from "./components/Blogs/Blogs";
import ViewToys from "./components/ViewToys/ViewToys";
import PrivateRoutes from "./Routes/PrivateRoutes";
import UpdateToys from "./components/UpdateToys/UpdateToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: "/mytoys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: "/addtoys",
        element: <AddToys></AddToys>
      },
      {
        path: "/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({params}) => fetch(`https://server-rho-virid.vercel.app/addtoys/${params.id}`)
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/viewtoys/:id",
        element: <PrivateRoutes><ViewToys></ViewToys></PrivateRoutes>,
        loader: ({params}) => fetch(`https://server-rho-virid.vercel.app/toys/${params.id}`)
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
