import { useEffect, useState } from "react";

function Assistant() {
  const [assistant, setAssistant] = useState([]);

  const getData = async () => {
    try {
      const req = await fetch("http://localhost:8081/assistants");
      const data = req.json();
      data.then((res) => {
        setAssistant(res);
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
            <td className="p-4 border border-black">Assistant ID</td>
            <td className="p-4 border border-black">Department ID</td>
          </tr>
        </thead>
        <tbody>
          {assistant.map((assistant) => {
            return (
              <tr>
                <td className="p-4 border border-black">
                  {assistant.assistant_id}
                </td>
                <td className="p-4 border border-black">
                  {assistant.department_id}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Assistant;
