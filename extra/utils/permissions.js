var permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
    }
  
  const hasPermission = (moduleName, role, permissionType) => {
   let hasPermissions = false;
   const obj = permissions[moduleName];
   const permission = obj[permissionType];
   permission.forEach(element => {
     if (element == role) {
       hasPermissions = true;
       return hasPermissions;
     }
   });
   return hasPermissions;
  };
  
  console.log(hasPermission('getUsers', 'trainee', 'write'));
  console.log(hasPermission('getUsers', 'trainer', 'write'));
  console.log(hasPermission('getUsers', 'trainee', 'delete'));
  console.log(hasPermission('getUsers', 'trainer', 'delete'));