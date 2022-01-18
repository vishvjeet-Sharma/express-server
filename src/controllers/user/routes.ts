import { Router } from 'express';
import UserRoutes  from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
import { Users } from '../../../extraTs/constants';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const router = Router();

router.get('/', authMiddleWare(Users, 'read'), validationHandler(validation.get), UserRoutes.get);
router.post('/createToken', UserRoutes.createToken);
router.post('/', authMiddleWare(Users, 'write'), validationHandler(validation.post), UserRoutes.post);
router.put('/', authMiddleWare(Users, 'write'), validationHandler(validation.put), UserRoutes.put);
router.delete('/', authMiddleWare(Users, 'delete'), validationHandler(validation.delete), UserRoutes.delete);

export default router;