import { Router } from "express";
import productRoutes from "../routes/productsRoutes.js";
import userRoutes from '../routes/usersRoutes.js';
import authRoutes from '../routes/authRoutes.js';
import dashboardRoutes from '../routes/dashboardRoute.js';


const router = Router();

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/dashboard', dashboardRoutes);

export default router;