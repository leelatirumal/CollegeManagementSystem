import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <input
        type="email"
        placeholder="Admin Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Admin Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAdminLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;
