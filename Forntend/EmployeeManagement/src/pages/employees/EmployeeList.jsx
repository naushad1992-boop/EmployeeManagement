import React from "react";

const EmployeeList = () => {

  return (
    <div>

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h4>Employee Management</h4>
          <p className="text-muted">
            Manage employee records
          </p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Add Employee
        </button>

      </div>

      <div className="card shadow-sm">

        <div className="card-body">

          <div className="row mb-3">

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search employee..."
              />
            </div>

          </div>

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead className="table-light">
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="6" className="text-center">
                    No employee records available
                  </td>
                </tr>
              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EmployeeList;