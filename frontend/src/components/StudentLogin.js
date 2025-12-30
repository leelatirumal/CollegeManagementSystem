import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function StudentLogin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  const handleLogin = () => {

    let userData = {
      userId: userId,
      password: password,
    }
    axios.post("http://localhost:8083/api/user/login", userData)
      .then(response => {
        console.log("Success:", response.data);
        localStorage.setItem("student", JSON.stringify(response.data));
        alert("Logged in successfully!");
        navigate("/student-dashboard");
      })
      .catch(error => {
        console.error("Error:", error);
      });

    setLoading(true);

    // setTimeout(() => {
    //   const student = JSON.parse(localStorage.getItem("student"));

    //   /* ❌ No student found */
    //   if (!student) {
    //     showToast("Please register first", "error");
    //     setLoading(false);
    //     return;
    //   }

    //   /* ❌ Wrong credentials */
    //   if (userId !== student.userId || password !== student.password) {
    //     showToast("Invalid userId or password", "error");
    //     setLoading(false);
    //     return;
    //   }

    //   /* ⏳ Pending approval */
    //   // if (student.status === "pending") {
    //   //   showToast("Waiting for admin approval ⏳", "error");
    //   //   setLoading(false);
    //   //   return;
    //   // }

    //   // /* ❌ Rejected by admin */
    //   // if (student.status === "rejected") {
    //   //   showToast("Your account has been rejected by admin ❌", "error");
    //   //   setLoading(false);
    //   //   return;
    //   // }

    //   // /* ✅ Approved */
    //   // if (student.status === "approved") {
    //   //   showToast("Login successful 🎉", "success");
    //   //   setTimeout(() => {
    //   //     navigate("/student-dashboard");
    //   //   }, 1200);
    //   // }
    // }, 1200);
  };

  return (
    <>
      {/* Toast Message */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}

      <div className="container">
        <h2>Student Login</h2>

        <input
          type="text"
          placeholder="UserId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className={loading ? "loading" : ""}
        >
          {loading ? "" : "Login"}
        </button>

        <div className="link">
          <p>
            <Link to="/register">New Student? Register</Link>
          </p>
          <p>
            <Link to="/admin">Admin Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default StudentLogin;
