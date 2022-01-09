import { diamond, equilateral } from './patterns';
import { validateUsers, hasPermission } from './utils';
import { users }  from './constants';

diamond(10);
equilateral(10);

validateUsers(users);
console.log(hasPermission('getUsers', 'trainee', 'write'));
console.log(hasPermission('getUsers', 'trainer', 'write'));
console.log(hasPermission('getUsers', 'trainee', 'delete'));