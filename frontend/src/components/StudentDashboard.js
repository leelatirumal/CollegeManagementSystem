import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <div className="container">
      <h2>Student Profile</h2>

      <div style={{
        background:"rgba(255,255,255,.2)",
        padding:"20px",
        borderRadius:"14px",
        marginBottom:"20px",
        color:"#fff",
        textAlign:"center"
      }}>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Status:</strong> Approved ✅</p>
      </div>

      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default StudentDashboard;
