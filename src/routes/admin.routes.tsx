import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TRoute = {
    path:string;
    element:ReactNode;
}

type TSidebarItem = {
    key:string;
    label:ReactNode;
    children?:TSidebarItem[];
}

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
    ],
  },
];

// export const adminPaths = [
//   {
//     path: "dashboard",
//     element: <AdminDashBoard></AdminDashBoard>,
//   },
//   {
//     path: "craete-student",
//     element: <CreateStudent></CreateStudent>,
//   },
//   {
//     path: "craete-admin",
//     element: <CreateAdmin></CreateAdmin>,
//   },
//   {
//     path: "craete-faculty",
//     element: <CreateFaculty></CreateFaculty>,
//   },
// ];

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
    // Add the current route if it has a path and element
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
  
    // Add child routes if they exist
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
  
    return acc;
  }, []);

  export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
    // Add top-level items with a path and name
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }
  
    // Add items with children
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
  
    return acc;
  }, []);