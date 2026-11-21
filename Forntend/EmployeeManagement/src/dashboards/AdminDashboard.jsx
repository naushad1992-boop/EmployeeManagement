import React, { useEffect, useState } from "react";
import dashboardService from "../services/dashboardService";

const AdminDashboard = () => {

  const [stats, setStats] = useState({
    totalEmployees: 0,
    presentToday: 0,
    pendingLeaves: 0,
    departments: 0
  });

  useEffect(() => {

    const loadDashboard = async () => {
      try {
        const response = await dashboardService.getAdminDashboard();
        setStats(response.data.data);
      } catch (error) {
        console.error("Dashboard API error:", error);
      }
    };

    loadDashboard();

  }, []);

  const cards = [
    {
      title: "Total Employees",
      value: stats.totalEmployees,
      icon: "bi-people",
      color: "primary"
    },
    {
      title: "Present Today",
      value: stats.presentToday,
      icon: "bi-person-check",
      color: "success"
    },
    {
      title: "Pending Leaves",
      value: stats.pendingLeaves,
      icon: "bi-calendar-x",
      color: "warning"
    },
    {
      title: "Departments",
      value: stats.departments,
      icon: "bi-building",
      color: "info"
    }
  ];

  return (
    <div>

      <h4 className="mb-4">Admin Dashboard</h4>

      <div className="row g-4">

        {cards.map((card) => (
          <div className="col-md-6 col-xl-3" key={card.title}>

            <div className="card dashboard-card shadow-sm">
              <div className="card-body">

                <div className="d-flex justify-content-between">

                  <div>
                    <p className="text-muted mb-2">
                      {card.title}
                    </p>

                    <h3>{card.value}</h3>
                  </div>

                  <div className={`dashboard-icon bg-${card.color}-subtle text-${card.color}`}>
                    <i className={`bi ${card.icon}`}></i>
                  </div>

                </div>

              </div>
            </div>

          </div>
        ))}

      </div>

      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h5>HRMS Overview</h5>
          <p className="text-muted mb-0">
            Manage employees, attendance, leave requests and HR operations.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;