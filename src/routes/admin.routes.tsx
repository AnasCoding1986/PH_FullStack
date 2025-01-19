import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths2 = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        element: <AdminDashBoard></AdminDashBoard>
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "/admin/craete-admin",
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: "Create Student",
                path: "/admin/craete-student",
                element: <CreateStudent></CreateStudent>
            },
            {
                name: "Create Faculty",
                path: "/admin/craete-faculty",
                element: <CreateFaculty></CreateFaculty>
            },
          
        ]
    }
]


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