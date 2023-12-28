import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch("http://localhost:8081/courses");
      const data = req.json();
      data.then((res) => {
        setCourses(res);
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <table className="w-full  border border-black">
        <thead className="font-bold  border border-black">
          <tr>
            <td className="p-4 border border-black">Course Name</td>
            <td className="p-4 border border-black">Room ID</td>
            <td className="p-4 border border-black">Department ID</td>
            <td className="p-4 border border-black">Doctor Code</td>
            <td className="p-4 border border-black">Assistant</td>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr>
                <td className="p-4 border border-black">{course.name}</td>
                <td className="p-4 border border-black">{course.room_id}</td>
                <td className="p-4 border border-black">
                  {course.department_id}
                </td>
                <td className="p-4 border border-black">{course.doctor_id}</td>
                <td className="p-4 border border-black">
                  {course.assistant_id}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Courses;
