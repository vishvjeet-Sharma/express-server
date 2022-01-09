import {permissions} from '../constants';

const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {
  let hasPermissions = false;
  const obj = permissions[moduleName];
  const permission = obj[permissionType];
  permission.forEach((element: string) => {
    if (element === role) {
      hasPermissions = true;
      return hasPermissions;
    }
    return hasPermissions;
  });
  return hasPermissions;
};

export default hasPermission;