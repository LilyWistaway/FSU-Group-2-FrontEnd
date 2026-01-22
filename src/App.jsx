import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import DepartmentsList from "./pages/DepartmentsList";
import DepartmentDetail from "./pages/DepartmentDetail";
import FacultyList from "./pages/FacultyList";
import FacultyDetail from "./pages/FacultyDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "16px" }}>
        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <Link to="/departments">Departments</Link>
          <Link to="/faculty">Faculty</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/departments" replace />} />
          <Route path="/departments" element={<DepartmentsList />} />
          <Route path="/departments/:id" element={<DepartmentDetail />} />
          <Route path="/faculty" element={<FacultyList />} />
          <Route path="/faculty/:id" element={<FacultyDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
