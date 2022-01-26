import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories /user /UserRepository';
import * as bcrypt from 'bcrypt';

const userRepository: UserRepository = new UserRepository();
const users = [
  {
    name: 'Gaurav',
    role: 'head-trainer',
    designation: 'Developer',
    dept: 'Node',
  },
  {
    name: 'Vishvjeet',
    role: 'Trainee',
    designation: 'Developer',
    dept: 'Node',
  },
];
class User {
  get = async (req: Request, res: Response): Promise < Response > => {
    console.log('Get request by user', req.body);
        try {
          const query = req.body || {}
          const result = await userRepository.find(query);
          return res.status(200).send({ message: 'Fetched data successfully', data: result });
        } catch (error) {
          return res.status(400).json({ status: 'Bad Request', message: error });
        }
  };

  post = async (req: Request, res: Response, next: NextFunction) => {
    console.log('Create request by user', req.body);
    const { name, email, password } = req.body;
    if (!name && !email && !password) {
      return res
        .status(400)
        .send({ message: 'Required trainee details', error: 'Bad request', status: '400' });
    }
    const data = req.body
    await userRepository.create(data);
    return res.status(200).send({ message: 'Trainee added sucessfully', status: 'success' });
  }

  put = async (req: Request, res: Response, next: NextFunction) => {
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