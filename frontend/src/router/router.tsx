import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import Layout from "@/pages/Layout.tsx";
import ErrorPage from "@/pages/ErrorPage";
import GameDetailPage from "@/pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
