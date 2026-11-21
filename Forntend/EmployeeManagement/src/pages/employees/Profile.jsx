
import React from "react";
// import { useAuth } from "../context/AuthContext";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="container-fluid">
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h4>My Profile</h4>
        </div>

        <div className="card-body">
          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                className="form-control"
                value={user?.firstName || ""}
                readOnly
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                className="form-control"
                value={user?.lastName || ""}
                readOnly
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                value={user?.email || user?.emailId || ""}
                readOnly
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Role</label>
              <input
                className="form-control"
                value={user?.role || ""}
                readOnly
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
