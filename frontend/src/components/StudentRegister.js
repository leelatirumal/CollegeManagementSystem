import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function StudentRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const student = {
      email,
      password,
      status: "pending"
    };

    localStorage.setItem("student", JSON.stringify(student));
    alert("Registered successfully! Wait for admin approval.");
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

      <div className="link">
        <p><Link to="/">Already Registered? Login</Link></p>
      </div>
    </div>
  );
}

export default StudentRegister;
