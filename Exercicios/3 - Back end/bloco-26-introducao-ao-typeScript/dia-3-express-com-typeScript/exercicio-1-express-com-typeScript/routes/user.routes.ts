// routes/books.routes.ts

import { Router } from 'express';
import UsersController from '../src/controllers/user.controller';

const router = Router();

const userController = new UsersController();

router.get('/', userController.getAll);

export default router;