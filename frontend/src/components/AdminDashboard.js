import { useState } from "react";

function AdminDashboard() {
  const [student, setStudent] = useState(
    JSON.parse(localStorage.getItem("student"))
  );
  const [toast, setToast] = useState(null);

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  const approveStudent = () => {
    const updated = { ...student, status: "approved" };
    localStorage.setItem("student", JSON.stringify(updated));
    setStudent(updated);
    showToast("Student approved ✅", "success");
  };

  const rejectStudent = () => {
    const updated = { ...student, status: "rejected" };
    localStorage.setItem("student", JSON.stringify(updated));
    setStudent(updated);
    showToast("Student rejected ❌", "error");
  };

  const deleteStudent = () => {
    localStorage.removeItem("student");
    setStudent(null);
    showToast("Student deleted 🗑️", "error");
  };

  return (
    <>
      {toast && <div className={`toast ${toast.type}`}>{toast.msg}</div>}

      <div className="container" style={{ width: "700px" }}>
        <h2>Admin Approval Panel</h2>

        {!student && (
          <p style={{ color: "#fff", textAlign: "center" }}>
            No student records found
          </p>
        )}

        {student && (
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{student.email}</td>
                <td>{student.status}</td>
                <td>
                  {student.status === "pending" && (
                    <>
                      <button
                        onClick={approveStudent}
                        style={{ marginRight: "6px" }}
                      >
                        Approve
                      </button>

                      <button
                        onClick={rejectStudent}
                        style={{ marginRight: "6px" }}
                      >
                        Reject
                      </button>
                    </>
                  )}

                  <button onClick={deleteStudent}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default AdminDashboard;
