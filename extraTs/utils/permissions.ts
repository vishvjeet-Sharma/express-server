import {permissions} from '../constants';

const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {
  const permission = permissions[moduleName];
  console.log(permission);
  
  if (!permission || !permission[permissionType]) {
    console.log(`${role} does not ${permissionType} for module ${moduleName}`);
    return false;
  }
  if (!permission[permissionType].includes(role)) {
    console.log(`${role} does not ${permissionType} for module ${moduleName}`);
    return false;
  }
  console.log(`${role} have permission to ${permissionType} for module ${moduleName}`);
  return true;
};

export default hasPermission;