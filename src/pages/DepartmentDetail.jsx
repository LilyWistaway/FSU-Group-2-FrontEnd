import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDepartmentById } from "../api/departments";

export default function DepartmentDetail() {
  const { id } = useParams();
  const [dept, setDept] = useState(null);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    fetchDepartmentById(id)
      .then((data) => {
        setDept(data);
        setStatus({ loading: false, error: "" });
      })
      .catch((err) => setStatus({ loading: false, error: err.message }));
  }, [id]);

  if (status.loading) return <p>Loading…</p>;
  if (status.error) return <p style={{ color: "crimson" }}>{status.error}</p>;
  if (!dept) return <p>Not found</p>;

  return (
    <div>
      <Link to="/departments">← Back</Link>
      <h1>{dept.name}</h1>

      {dept.bannerImage && (
        <img
          src={dept.bannerImage}
          alt={`${dept.name} banner`}
          style={{
            width: "100%",
            maxHeight: 280,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      )}

      {dept.description && <p>{dept.description}</p>}
      {dept.contactInfo && (
        <>
          <h3>Contact</h3>
          <p>{dept.contactInfo}</p>
        </>
      )}

      <h3>Faculty</h3>
      {!dept.faculty?.length ? (
        <p>No faculty listed.</p>
      ) : (
        <ul>
          {dept.faculty.map((p) => (
            <li key={p.id}>
              <Link to={`/faculty/${p.id}`}>{p.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
