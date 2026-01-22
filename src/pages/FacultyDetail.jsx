import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFacultyById } from "../api/faculty";

export default function FacultyDetail() {
  const { id } = useParams();
  const [prof, setProf] = useState(null);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    fetchFacultyById(id)
      .then((data) => {
        setProf(data);
        setStatus({ loading: false, error: "" });
      })
      .catch((err) => setStatus({ loading: false, error: err.message }));
  }, [id]);

  if (status.loading) return <p>Loading…</p>;
  if (status.error) return <p style={{ color: "crimson" }}>{status.error}</p>;
  if (!prof) return <p>Not found</p>;

  return (
    <div>
      <Link to="/faculty">← Back</Link>
      <h1>{prof.name}</h1>

      {prof.profileImage && (
        <img
          src={prof.profileImage}
          alt={`${prof.name} profile`}
          style={{
            width: 160,
            height: 160,
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      )}

      {prof.bio && <p>{prof.bio}</p>}

      <h3>Contact</h3>
      {prof.email && <p>Email: {prof.email}</p>}
      {prof.contactInfo && <p>{prof.contactInfo}</p>}

      {prof.department && (
        <>
          <h3>Department</h3>
          <Link to={`/departments/${prof.department.id}`}>
            {prof.department.name}
          </Link>
        </>
      )}
    </div>
  );
}
