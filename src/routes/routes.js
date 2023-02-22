import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/root/root";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import ArticleList from "../pages/ArticleList/ArticleList";
import DramaArticles from "../pages/DramaArticles/DramaArticles";
import NewsArticles from "../pages/NewsArticlePage/NewsArticles";
import GamingArticles from "../pages/GamingArticles/GamingArticles";
import AuthorPage from "../pages/AuthorPage/AuthorPage";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/article/:id", element: <ArticlePage /> },
      { path: `/articles/:tags`, element: <ArticleList /> },
      { path: `/articles/Drama`, element: <DramaArticles tags={"Drama"} /> },
      { path: `/articles/Gaming`, element: <GamingArticles tags={"Gaming"} /> },
      { path: `/articles/News`, element: <NewsArticles tags={"News"} /> },
      { path: `/author/:name`, element: <AuthorPage /> },
    ],
  },
]);

//:todo change url path
