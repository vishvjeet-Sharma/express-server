import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories /user /UserRepository';

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
  get = async (req: Request, response: Response): Promise < Response > => {
        const userRepository: UserRepository = new UserRepository();
        try {
            const query = req.body || {}
            const result = await userRepository.find(query);
                return response
                .status(200)
                .send({ message: 'Fetched data successfully', data: result });
        } catch (error) {
            return response
            .status(400)
            .json({ status: 'Bad Request', message: error });
        }
  };
  post = (req: Request, res: Response, next: NextFunction) => {
    console.log('Create request by user', req.body);
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .send({ message: 'Required trainee details', error: 'Bad request', status: '400' });
    }
    return res.status(200).send({ message: 'Trainee added sucessfully', status: 'success' });
  }
  put = (req: Request, res: Response, next: NextFunction) => {
    console.log('Update request by user', req.body);
    const { name, designation, dept } = req.body;
    const newTrainee = users.find((item) => item.name === name);
    if (!newTrainee) {
      return res.status(400).send({ error: 'Bad Request', message: 'No Trainee Found', status: '400' });
    }
    const updatedTrainee = [...users, { name, designation, dept }];
    return res.status(201).send({ message: 'Trainee Updated Successfully', data: updatedTrainee });
  };
  delete = (req: Request, res: Response) => {
    console.log('Delete request by user', req.body);
    const { name } = req.body;
    const user = users.find((item) => item.name === name);
    if (!user) {
      return res.status(400).send({ error: 'Bad Request', message: 'No Trainee Found', status: '400' });
    }
    const deletedTrainee = users.filter((data) => data.name !== name);
    return res.status(201).send({ message: 'Users deleted successfully', data: deletedTrainee });
  };
  createToken = (req: Request, res: Response) => {
    const token = jwt.sign(req.body, config.secret);
    return res.status(200).send({message: 'Token created successfully', data: {token}, status: 'success'});
  };
}
export default new User();