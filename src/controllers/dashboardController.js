import { getDashboardData } from "../services/dashboardService.js";

export const getDashboard = async (req, res) => {
  try {
    const data = await getDashboardData();

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      message: "Erro ao carregar dashboard",
      error: error.message
    });
  }
};