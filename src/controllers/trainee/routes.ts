import { Router } from 'express';
import TraineeRoutes  from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';

const router = Router();

router.get('/', validationHandler(validation.get), TraineeRoutes.get);
router.post('/', validationHandler(validation.post), TraineeRoutes.post);
router.put('/:name', validationHandler(validation.put), TraineeRoutes.put);
router.delete('/:name', validationHandler(validation.delete), TraineeRoutes.delete);
export default router;