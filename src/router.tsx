import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/_layout";
// import HomePage from "@/pages/home"
import NotFoundPage from "@/pages/not-found";
import Landing from "@/pages/landing";
import SignInPage from "@/pages/signin";
import Choices from "./pages/Choices";

// IMPORTANT: Do not remove or modify the code below!
// Normalize basename when hosted in Power Apps
const BASENAME = new URL(".", location.href).pathname;
if (location.pathname.endsWith("/index.html")) {
  history.replaceState(null, "", BASENAME + location.search + location.hash);
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout showHeader />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Landing /> },
    ],
  },
  {
    path: "/signin",
    element: <Layout showHeader={false} />,
    children: [{ index: true, element: <SignInPage /> }],
  },
  {
    path: "/choices",
    element: <Layout showHeader />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Choices /> }
    ]
  }
], {
  basename: BASENAME // IMPORTANT: Set basename for proper routing when hosted in Power Apps
});
