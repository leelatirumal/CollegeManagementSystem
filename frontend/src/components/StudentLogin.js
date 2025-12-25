import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      const student = JSON.parse(localStorage.getItem("student"));

      /* ❌ No student found */
      if (!student) {
        showToast("Please register first", "error");
        setLoading(false);
        return;
      }

      /* ❌ Wrong credentials */
      if (email !== student.email || password !== student.password) {
        showToast("Invalid email or password", "error");
        setLoading(false);
        return;
      }

      /* ⏳ Pending approval */
      if (student.status === "pending") {
        showToast("Waiting for admin approval ⏳", "error");
        setLoading(false);
        return;
      }

      /* ❌ Rejected by admin */
      if (student.status === "rejected") {
        showToast("Your account has been rejected by admin ❌", "error");
        setLoading(false);
        return;
      }

      /* ✅ Approved */
      if (student.status === "approved") {
        showToast("Login successful 🎉", "success");
        setTimeout(() => {
          navigate("/student-dashboard");
        }, 1200);
      }
    }, 1200);
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
