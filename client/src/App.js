import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Employee from "./components/Main/Attendence";
import Scan from "./components/Scanner";
function App() {
  const User = JSON.parse(localStorage.getItem("user"));
  // user&&console.log(user);

  return (
    <Routes>
      {User && <Route path="/" exact element={<Main />} />}
      {User === "admin" && <Route path="/signup" exact element={<Signup />} />}
      {User === "employee" && (
        <Route path="/signup" element={<Navigate replace to="/" />} />
      )}
      {/* <Whatstherole/> */}
      <Route path="/signup" element={<Navigate replace to="/login" />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/attendence" exact element={<Employee />} />
      <Route path="/Scan" exact element={<Scan />} />
    </Routes>
  );
}

export default App;
