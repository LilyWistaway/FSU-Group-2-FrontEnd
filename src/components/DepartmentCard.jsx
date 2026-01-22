import { Link } from "react-router-dom";

export default function DepartmentCard({ dept }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h3 style={{ margin: "0 0 8px" }}>{dept.name}</h3>
      {dept.description && <p style={{ margin: 0 }}>{dept.description}</p>}
      <div style={{ marginTop: 8 }}>
        <Link to={`/departments/${dept.id}`}>View details</Link>
      </div>
    </div>
  );
}
