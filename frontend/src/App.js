import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./layouts/Root";
import Group from "./pages/Group";
import Checks from "./pages/Checks";

const router = createBrowserRouter([
  {
    index: "/",
    element: <Root />,
    children: [
      { index: true, element: <Checks /> },
      { path: "group", element: <Group /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
