import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories /user /UserRepository';
import * as bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from '../../../extraTs/constants';

const userRepository: UserRepository = new UserRepository();

class User {
  getAll = async (req: Request, res: Response, next: NextFunction): Promise < Response > => {
    console.log('Get request by user', req.body);
        try {
          const {limit=0, skip=0, search='' } = req.query;
          const result = await userRepository.findAll({ limit, skip, search });
          const count = await userRepository.count();
          return res.status(200).send({ message: 'Fetched data successfully', data: result, count });
        } catch (err) {
          next({ message: err.message, status: 'error' });
        }
  };
  create = async (req: Request, res: Response, next: NextFunction) => {
    console.log('Create request by user', req.body);
    try {
      const obj = req.body;
      const salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
      const hash = bcrypt.hashSync(config.password, salt);
      const response = await userRepository.create({ ...obj, password: hash});
      return res.status(200).send({ message: 'Trainee added sucessfully', status: 'success' });
    } catch(e) {
      next({ message: e.message, status: 'error' });
    }
  };
  update = async (req: Request, res: Response, next: NextFunction) => {
    console.log('Update request by user', req.body);
    try {
      const{ originalId , ...rest} = req.body;
      const data = await userRepository.updateData({ originalId }, rest);
      res.status(200).json({ data: data, message: 'Trainee Updated Successfully', count: data.length, status:'success' });
    } catch (err) {
      next({ message: err.message, status: 'error' });
    }
  };
  delete = async (req: Request, res: Response) => {
    console.log('Delete request by user', req.body);
    const { originalId } = req.body;
    const data = await userRepository.delete(originalId);
    return res.status(200).json({ message: 'Trainee deleted successfully', data: data, status: 'success' });
  };
  passMatch = async (data: any) => {
    const userFound = await userRepository.findOne(data.email);
    const match = await bcrypt.compare( data.password, userFound.password)
    if (match) {
      console.log('Hash Pass Matched');
      return userFound;
    } else {
      console.log('Incorrect Password');
      throw new Error ('Password not matched')
    }
  };
  createToken = async (req: Request, res: Response) => {
    try {
      const userFound = await this.passMatch(req.body);
      if (userFound) {
      const data = {originalId: userFound.originalId, email: userFound.email};
      const token = jwt.sign(data, config.secret, { expiresIn: 60 * 15 });
      return res.status(200).send({message: 'Token created successfully', data: { token }, status: 'success'});
    }
    } catch (e) {
      res.status(403).send({message: 'Token generation failed', status: 'Failure'});
    }
  };
}
export default new User();