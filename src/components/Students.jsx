import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch("http://localhost:8081/students");
      const data = req.json();
      data.then((res) => {
        setStudents(res);
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
        <thead className="font-bold  border border-black ">
          <tr>
            <td className="p-4 border border-black">Student Number</td>
            <td className="p-4 border border-black">GPA</td>
            <td className="p-4 border border-black">Department</td>
            <td className="p-4 border border-black">Level</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <td className="p-4 border border-black">
                  {student.student_id}
                </td>
                <td className="p-4 border border-black">{student.gpa}</td>
                <td className="p-4 border border-black">
                  {student.department_id}
                </td>
                <td className="p-4 border border-black">{student.lvl}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Students;
