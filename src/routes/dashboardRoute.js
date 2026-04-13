import { Router } from 'express';
// descomentar após finalizar os controllers
import { getDashboard } from '../controllers/dashboardController.js';

const router = Router();

// aqui implementar as rotas baseadas no controller
router.get('/', getDashboard);

export default router;