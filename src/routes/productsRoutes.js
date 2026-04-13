import { Router } from 'express';
// descomentar após finalizar os controllers
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProductById
} from '../controllers/productController.js';

const router = Router();

// aqui implementar as rotas baseadas no controller
router.get('/', getProduct);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;