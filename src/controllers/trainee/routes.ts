import { Router } from 'express';
import TraineeRoutes from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { Trainees } from '../../../extraTs/constants';

const router = Router();
router
    .get('/', authMiddleWare(Trainees, 'read'), validationHandler(validation.get), TraineeRoutes.get)
    .post('/', authMiddleWare(Trainees, 'write'), validationHandler(validation.post), TraineeRoutes.post)
    .put('/:name', authMiddleWare(Trainees, 'write'), validationHandler(validation.put), TraineeRoutes.put)
    .delete('/:name', authMiddleWare(Trainees, 'delete'), validationHandler(validation.delete), TraineeRoutes.delete)
    .post('/createToken', TraineeRoutes.createToken);

export default router;