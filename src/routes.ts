import { Router } from 'express';

import  { TraineeRoutes, UserRoutes } from './controllers';

const router = Router();

router.use('/trainee', TraineeRoutes);
router.use('/user', UserRoutes);

export default router;