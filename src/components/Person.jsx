import { useEffect, useState } from "react";

function Person() {
  const [person, setPerson] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch("http://localhost:8081/people");
      const data = req.json();
      data.then((res) => {
        setPerson(res);
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
            <td className="p-4 border border-black">First Name</td>
            <td className="p-4 border border-black">Last Name</td>
            <td className="p-4 border border-black">Gender</td>
            <td className="p-4 border border-black">Age</td>
            <td className="p-4 border border-black">Phone</td>
          </tr>
        </thead>
        <tbody>
          {person.map((person) => {
            return (
              <tr>
                <td className="p-4 border border-black">{person.Fname}</td>
                <td className="p-4 border border-black">{person.Lname}</td>
                <td className="p-4 border border-black">{person.gender}</td>
                <td className="p-4 border border-black">{person.age}</td>
                <td className="p-4 border border-black">{person.phon}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Person;
