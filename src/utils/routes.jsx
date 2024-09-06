import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/Layout";
import Blog from "../pages/blog";
import { PAGE_ROUTES } from "./constants";
import Tag from "../pages/tag";
import User from "../pages/user";
import Archive from "../pages/archives";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: PAGE_ROUTES.HOME,
      },
      {
        element: <Blog />,
        path: PAGE_ROUTES.BLOG,
      },
      {
        element: <Tag />,
        path: PAGE_ROUTES.TAG
      },
      {
        element: <User />,
        path: PAGE_ROUTES.USER
      },
      {
        element: <Archive />,
        path: PAGE_ROUTES.ARCHIVE
      },
    ]
  },
]);
