import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./layouts/Root";
import Group from "./pages/Group";
import Checks from "./pages/Checks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Checks /> },
      { path: "group", element: <Group /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
