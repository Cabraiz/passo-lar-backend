import { Router } from 'express';
const router = Router();
import { handleLogout } from '../controllers/logoutController';

router.get('/', handleLogout);

export default router;
