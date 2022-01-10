import { permissions } from '../constants';

const hasPermission = (moduleName, role, permissionType) => {
  let hasPermissions = false;
  const obj = permissions[moduleName];
  const permission = obj[permissionType];
  permission.forEach((element) => {
    if (element === role) {
      hasPermissions = true;
      return hasPermissions;
    }
    return element;
  });
};

export default hasPermission;
