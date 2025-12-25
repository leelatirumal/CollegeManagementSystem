import { Routes, Route } from "react-router-dom";
import StudentLogin from "./components/StudentLogin";
import StudentRegister from "./components/StudentRegister";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentLogin />} />
      <Route path="/register" element={<StudentRegister />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
