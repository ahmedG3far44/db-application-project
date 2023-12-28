import { useEffect, useState } from "react";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch("http://localhost:8081/doctors");
      const data = req.json();
      data.then((res) => {
        setDoctors(res);
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
            <td className="p-4 border border-black">Doctor Numbers</td>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => {
            return (
              <tr>
                <td className="p-4 border border-black">{doc.doctor_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Doctors;
