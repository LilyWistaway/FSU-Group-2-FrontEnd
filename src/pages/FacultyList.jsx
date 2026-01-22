import { useEffect, useState } from "react";
import { fetchFaculty } from "../api/faculty";
import FacultyCard from "../components/FacultyCard";

export default function FacultyList() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    fetchFaculty()
      .then((data) => {
        setItems(data);
        setStatus({ loading: false, error: "" });
      })
      .catch((err) => setStatus({ loading: false, error: err.message }));
  }, []);

  return (
    <div>
      <h1>Faculty</h1>
      {status.loading && <p>Loading…</p>}
      {status.error && <p style={{ color: "crimson" }}>{status.error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        {items.map((prof) => (
          <FacultyCard key={prof.id} prof={prof} />
        ))}
      </div>
    </div>
  );
}
