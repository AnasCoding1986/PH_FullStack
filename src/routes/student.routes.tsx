import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashBoard from "../pages/student/StudentDashBoard";


export const studentPaths = [
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
