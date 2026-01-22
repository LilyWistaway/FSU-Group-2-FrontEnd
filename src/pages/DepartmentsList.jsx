import { useEffect, useState } from "react";
import { fetchDepartments } from "../api/departments";
import DepartmentCard from "../components/DepartmentCard";

export default function DepartmentsList() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    fetchDepartments()
      .then((data) => {
        setItems(data);
        setStatus({ loading: false, error: "" });
      })
      .catch((err) => setStatus({ loading: false, error: err.message }));
  }, []);

  return (
    <div>
      <h1>Departments</h1>
      {status.loading && <p>Loading…</p>}
      {status.error && <p style={{ color: "crimson" }}>{status.error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        {items.map((dept) => (
          <DepartmentCard key={dept.id} dept={dept} />
        ))}
      </div>
    </div>
  );
}
