import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import AdminDashboard from "./dashboards/AdminDashboard";
import EmployeeDashboard from "./dashboards/EmployeeDashboard";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import EmployeeList from "./pages/employees/EmployeeList"; 
import Profile from "./pages/employees/Profile";

const Placeholder = ({ title }) => (
  <div className="card shadow-sm">
    <div className="card-body">
      <h4>{title}</h4>
      <p className="text-muted mb-0">
        This module is under development.
      </p>
    </div>
  </div>
);

function App() {

  return (
    <AuthProvider>

      <BrowserRouter>

        <Routes>

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={["Admin", "Employee"]} />}>

            <Route element={<MainLayout />}>

              <Route
                path="/employee/dashboard"
                element={<EmployeeDashboard />}
              />

              <Route
                path="/profile"
                element={<Profile />}
              />

              <Route
                path="/attendance"
                element={<Placeholder title="Attendance Management" />}
              />

              <Route
                path="/leaves"
                element={<Placeholder title="Leave Management" />}
              />

              <Route
                path="/engagement"
                element={<Placeholder title="Employee Engagement" />}
              />

            </Route>

          </Route>

          {/* Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>

            <Route element={<MainLayout />}>

              <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
              />

              <Route
                path="/employees"
                element={<EmployeeList />}
              />

              <Route
                path="/masters"
                element={<Placeholder title="Master Management" />}
              />

              <Route
                path="/reports"
                element={<Placeholder title="HR Reports" />}
              />

            </Route>

          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />

        </Routes>

      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;