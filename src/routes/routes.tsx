import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
        ],
    },
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashBoard></AdminDashBoard>
            },
            {
                path: "craete-student",
                element: <CreateStudent></CreateStudent>
            },
            {
                path: "craete-admin",
                element: <CreateAdmin></CreateAdmin>
            },
            {
                path: "craete-faculty",
                element: <CreateFaculty></CreateFaculty>
            },
        ],
    },
]);

export default router;
