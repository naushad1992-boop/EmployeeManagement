import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {

  const { user } = useAuth();

  const isAdmin = user?.role?.toLowerCase() === "admin";

  const adminMenu = [
    { title: "Dashboard", path: "/admin/dashboard", icon: "bi-speedometer2" },
    { title: "Employees", path: "/employees", icon: "bi-people" },
    { title: "Masters", path: "/masters", icon: "bi-database" },
    { title: "Attendance", path: "/attendance", icon: "bi-calendar-check" },
    { title: "Leaves", path: "/leaves", icon: "bi-calendar-x" },
    { title: "Engagement", path: "/engagement", icon: "bi-heart" },
    { title: "Reports", path: "/reports", icon: "bi-bar-chart" },
    { title: "My Profile", path: "/profile", icon: "bi-person" }
  ];

  const employeeMenu = [
    { title: "Dashboard", path: "/employee/dashboard", icon: "bi-speedometer2" },
    { title: "My Attendance", path: "/attendance", icon: "bi-calendar-check" },
    { title: "My Leaves", path: "/leaves", icon: "bi-calendar-x" },
    { title: "Engagement", path: "/engagement", icon: "bi-heart" },
    { title: "My Profile", path: "/profile", icon: "bi-person" }
  ];

  const menu = isAdmin ? adminMenu : employeeMenu;

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <i className="bi bi-building me-2"></i>
        HRMS Portal
      </div>

      <div className="sidebar-user">
        <div className="user-avatar">
          {user?.firstName?.charAt(0) || "U"}
        </div>

        <div>
          <strong>
            {user?.firstName || "User"}
          </strong>
          <small>{user?.role || "Employee"}</small>
        </div>
      </div>

      <nav className="sidebar-menu">

        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.title}</span>
          </NavLink>
        ))}

      </nav>

    </aside>
  );
};

export default Sidebar;