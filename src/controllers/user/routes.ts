import { Router } from 'express';
import UserRoutes  from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { Users } from '../../../extraTs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const router = Router();

router.get('/', authMiddleWare(Users, 'read'), validationHandler(validation.get), UserRoutes.getAll);
router.post('/createToken', UserRoutes.createToken);
router.post('/', authMiddleWare(Users, 'write'), validationHandler(validation.post), UserRoutes.create);
router.put('/', authMiddleWare(Users, 'write'), validationHandler(validation.put), UserRoutes.update);
router.delete('/', authMiddleWare(Users, 'delete'), validationHandler(validation.delete), UserRoutes.delete);

export default router;