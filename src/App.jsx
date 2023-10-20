import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { loader as dataLoader } from "./util/fetch";
import RootLayout from "./pages/root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import DestinationPage from "./pages/Destinations";
import CrewsPage from "./pages/Crews";
import TechnologyPage from "./pages/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: dataLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "destinations", element: <DestinationPage /> },
      { path: "crews", element: <CrewsPage /> },
      { path: "technology", element: <TechnologyPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
