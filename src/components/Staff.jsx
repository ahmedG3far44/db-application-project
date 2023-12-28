import { useEffect, useState } from "react";

function Staff() {
  const [staffMembers, setStaff] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch("http://localhost:8081/staff");
      const data = req.json();
      data.then((res) => {
        setStaff(res);
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
            <td className="p-4 border border-black">Staff Number</td>
            <td className="p-4 border border-black">Salary</td>
          </tr>
        </thead>
        <tbody>
          {staffMembers.map((member) => {
            return (
              <tr>
                <td className="p-4 border border-black">{member.staff_id}</td>
                <td className="p-4 border border-black">{member.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Staff;
