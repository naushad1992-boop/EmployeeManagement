
import api from "./api";

const dashboardService = {

  getAdminDashboard: async () => {
    return await api.get("/Dashboard/Admin");
  },

  getEmployeeDashboard: async () => {
    return await api.get("/Dashboard/Employee");
  }

};

export default dashboardService;
