import { Link } from "react-router-dom";

export default function FacultyCard({ prof }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h3 style={{ margin: "0 0 8px" }}>{prof.name}</h3>
      {prof.email && <p style={{ margin: 0 }}>{prof.email}</p>}
      <div style={{ marginTop: 8 }}>
        <Link to={`/faculty/${prof.id}`}>View profile</Link>
      </div>
    </div>
  );
}
