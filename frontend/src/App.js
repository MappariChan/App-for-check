import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Root from "./layouts/Root";
import Group from "./pages/Group";
import Checks from "./pages/Checks";
import SignInModal from "./components/RegistrationModals/SignInModal";
import store from "./store/store";

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
  // return <SignInModal />;
};

export default App;
