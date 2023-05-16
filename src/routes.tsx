import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Homepage from "./pages/Homepage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorsPage from "./pages/ErrorsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorsPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
