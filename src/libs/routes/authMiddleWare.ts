import * as jwt from 'jsonwebtoken';
import hasPermission from '../../../extraTs/utils/permissions';
import config from '../../config/configuration';
import UserRepository from '../../repositories /user /UserRepository';

const userRepository: UserRepository = new UserRepository();

export default (module, permissionType) => async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return next({
      error: 'Unauthorized', message: 'Token not found', status: 403,
    });
  }
  const { secret } = config;
  let user: any = {};

  try {
    user = jwt.verify(token, secret);
  } catch (err) {
    console.log(err);
    next({ error: 'Unauthorized', message: 'User not Authorized', status: 403 });
  }

  const userData = await userRepository.findOne({_id: user.id});
  console.log(userData);

  if (!userData) {
    next({error: 'Unauthorized', message: 'User not found', status: 403});
  }
  if (!hasPermission(module, userData.role, permissionType)) {
        next({ error: 'Unauthorized', message: 'Permission Denied', status: 403});
  }
  req.user = user;
  next()
};