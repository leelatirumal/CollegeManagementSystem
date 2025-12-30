import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function StudentRegister() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("1");
  const [confirmPassword, setConfirmPassword] = useState("1");
  const navigate = useNavigate();

  const handleRegister = () => {

    console.log("Registering student:", studentId);

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const userData = {
      userId: studentId,
      password: password,
      role: "STUDENT",
    };


    axios.post("http://localhost:8083/api/user/register", userData)
    .then(response => {
      
      console.log("Success:", response.data);
      alert("Registered successfully! Wait for admin approval.");
      navigate("/");
    })
    .catch(error => {
      console.error("Error:", error);
    });

    // fetch("http://localhost:8083/api/user/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //      body: JSON.stringify(userData) 
    //     .then(response => {
    //       console.log("Success:", response);
    //       alert("Registered successfully! Wait for admin approval.");
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //       alert("Registration failed. Please try again.");
    //     }),
    //   });
    // const student = {
    //   email,
    //   password,
    //   status: "pending"
    // };

    // localStorage.setItem("student", JSON.stringify(student));
    // alert("Registered successfully! Wait for admin approval.");
    // navigate("/");
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>
      <input
        type="email"
        placeholder="StudentId"
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          console.log(e.target.value);
          setPassword(e.target.value)}}
      />
      <input 
        type="password"
        placeholder="Confirm Password"
        onChange={(e) =>{setConfirmPassword(e.target.value)}}
      />

      <button onClick={handleRegister}>Register</button>

      <div className="link">
        <p><Link to="/">Already Registered? Login</Link></p>
      </div>
    </div>
  );
}

export default StudentRegister;
