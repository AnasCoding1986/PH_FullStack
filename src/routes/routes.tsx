import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./admin.routes";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/admin",
        element: <App />,
        children: routeGenerator(adminPaths),
    },
    {
        path: "/student",
        element: <App />,
        children: routeGenerator(studentPaths),
    },
    {
        path: "/faculty",
        element: <App />,
        children: routeGenerator(facultyPaths),
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
