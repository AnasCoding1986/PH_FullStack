import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


export const adminPaths = [
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
]