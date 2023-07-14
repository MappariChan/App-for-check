import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./layouts/Root";
import Home from "./pages/Home";
import Checks from "./pages/Checks";

const router = createBrowserRouter([
  {
    index: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "checks", element: <Checks /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
