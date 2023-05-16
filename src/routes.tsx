import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Homepage from "./pages/Homepage";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "game/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
