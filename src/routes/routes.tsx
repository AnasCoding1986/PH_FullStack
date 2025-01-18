import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./admin.routes";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/admin",
        element: <App />,
        children: adminPaths,
    },
    {
        path: "/student",
        element: <App />,
        children: adminPaths,
    },
    {
        path: "/faculty",
        element: <App />,
        children: adminPaths,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
]);

export default router;
