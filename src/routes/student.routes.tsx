import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashBoard from "../pages/student/studentDashBoard";


export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashBoard></StudentDashBoard>
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse></OfferedCourse>,
  },
];
