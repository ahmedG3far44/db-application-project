import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assistant from "./components/Assistant";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Doctors from "./components/Doctors";
import Person from "./components/Person";
import Staff from "./components/Staff";
import Students from "./components/Students";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App p-4 w-3/4 mt-10 m-auto justify-center items-center bg-gray-100 rounded-md">
        <Routes>
          <Route path="/people" element={<Person />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/assistants" element={<Assistant />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
