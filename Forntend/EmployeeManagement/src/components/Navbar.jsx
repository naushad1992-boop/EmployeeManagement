import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="top-navbar">

      <div>
        <h5 className="mb-0">Human Resource Management</h5>
      </div>

      <div className="d-flex align-items-center gap-3">

        <span>
          Welcome, <strong>{user?.firstName}</strong>
        </span>

        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-person-circle me-2"></i>
            Account
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button
                className="dropdown-item"
                onClick={() => navigate("/profile")}
              >
                My Profile
              </button>
            </li>

            <li><hr className="dropdown-divider" /></li>

            <li>
              <button
                className="dropdown-item text-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;