import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import GameDetailsPage from "@/components/GameDetail.tsx";
import Layout from "@/pages/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: "games/:id",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

export default router;
