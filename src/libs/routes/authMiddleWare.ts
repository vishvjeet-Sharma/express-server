import * as jwt from 'jsonwebtoken';
import hasPermission from '../../../extraTs/utils/permissions';
import config from '../../config/configuration';
import UserRepository from '../../repositories /user /UserRepository';

const userRepository: UserRepository = new UserRepository();

export default (module, permissionType) => async (req, res, next) => {
  let token = req.header('Authorization');
  console.log('hello', token);

  if (!token) {
    return next({error: 'Authentication Failed', message: 'Token not found', status: 403,
    });
  }
  if (token.startsWith ('Bearer ')) {
    token = token.substring(7, token.length);
}
  const { secret } = config;

  let user: any = {};

  try {
    user = jwt.verify(token, secret);
  } catch (err) {
    next({ error: 'Authentication failed', message: 'User not Authorized', status: 403 });
  }

  const userData = await userRepository.findOne({_id: user.originalId});

  if (!userData) {
    next({error: 'Authentication failed', message: 'User not found', status: 403});
  }
  if (!hasPermission(module, userData.role, permissionType)) {
    console.log(userData.role,module,permissionType,'ajhdsvbajds')
        next({ error: 'Unauthorized', message: 'Permission Denied', status: 403});
  }
  req.user = user;
  next()
};