import Home from "../Components/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";
import Orders from "../Components/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
