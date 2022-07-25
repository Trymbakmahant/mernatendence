import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Employee from "./components/Main/Attendence";
import Scan from "./components/Scanner";
import Navebar from "./components/navbar";
function App() {
  const User = JSON.parse(localStorage.getItem("user"));
  // user&&console.log(user);

  return (
    <main>
      <Navebar />
      <Routes>
        {User && <Route path="/" exact element={<Main />} />}
        {User === "admin" && (
          <Route path="/signup" exact element={<Signup />} />
        )}
        {User === "employee" && (
          <Route path="/signup" element={<Navigate replace to="/" />} />
        )}
        {User == "admin" && <Route path="/Scan" exact element={<Scan />} />}

        <Route path="/signup" element={<Navigate replace to="/login" />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/attendence" exact element={<Employee />} />
        <Route path="/Scan" exact element={<Navigate replace to="/login" />} />
      </Routes>
    </main>
  );
}

export default App;
