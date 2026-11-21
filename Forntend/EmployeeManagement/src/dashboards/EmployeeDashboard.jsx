import React from "react";
import { useAuth } from "../context/AuthContext";

const EmployeeDashboard = () => {

  const { user } = useAuth();

  return (
    <div>

      <h4>Employee Dashboard</h4>

      <p className="text-muted">
        Welcome back, {user?.firstName}!
      </p>

      <div className="row g-4">

        {[
          ["My Attendance", "View attendance records", "bi-calendar-check"],
          ["My Leaves", "Apply and track leave requests", "bi-calendar-x"],
          ["My Profile", "View personal information", "bi-person"],
          ["Engagement", "View company activities", "bi-heart"]
        ].map(([title, description, icon]) => (

          <div className="col-md-6 col-xl-3" key={title}>
            <div className="card shadow-sm dashboard-card">
              <div className="card-body">
                <i className={`bi ${icon} fs-2 text-primary`}></i>
                <h5 className="mt-3">{title}</h5>
                <p className="text-muted">{description}</p>
              </div>
            </div>
          </div>

        ))}

      </div>

    </div>
  );
};

export default EmployeeDashboard;