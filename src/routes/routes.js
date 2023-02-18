import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/root/root";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import ArticleList from "../pages/ArticleList/ArticleList";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/article/:id", element: <ArticlePage /> },
      { path: "/articles/:tags", element: <ArticleList /> },
    ],
  },
]);
