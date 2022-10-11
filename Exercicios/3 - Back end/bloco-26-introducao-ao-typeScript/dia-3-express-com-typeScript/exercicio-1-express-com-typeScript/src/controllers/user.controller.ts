// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import statusCodes from '../../statusCodes';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(statusCodes.OK).json(users);
  };
}

export default UserController;