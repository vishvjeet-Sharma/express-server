interface IEmailType {
    traineeEmail: string;
    reviewerEmail: string;
  }
  
  interface IPermissions {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  }
  
  interface IUserType {
    [key: string]: IPermissions;
  }
  
  export {IEmailType, IPermissions, IUserType};