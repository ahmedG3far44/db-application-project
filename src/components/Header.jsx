import { NavLink } from "react-router-dom";
import "../index.css";
function Header() {
  return (
    <div className="flex justify-around items-center p-4 w-full sticky left-0 top-0 bg-teal-500 shadow-md">
      <h1 className="text-3xl font-bold text-white">University DBMS</h1>
      <div className="links flex gap-8 font-semibold">
        <NavLink to="/people">People</NavLink>
        <NavLink to="/staff">Staff</NavLink>
        <NavLink to="/doctors">Doctors</NavLink>
        <NavLink to="/assistants">Assistant</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/courses">Courses</NavLink>
      </div>
    </div>
  );
}

export default Header;
