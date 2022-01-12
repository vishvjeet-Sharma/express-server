import {IEmailType} from '../interfaces';

import validateEmail from './helpers';

const validUsers: string[] = [];
const invalidUsers: string[] = [];

const validateUsers = (users: IEmailType[]) => {
  users.map((element: IEmailType) => {
    const {traineeEmail, reviewerEmail} = element;
    validateEmail(traineeEmail)
      ? validUsers.push(traineeEmail)
      : invalidUsers.push(traineeEmail);
    validateEmail(reviewerEmail)
      ? validUsers.push(reviewerEmail)
      : invalidUsers.push(reviewerEmail);
  });
  console.log('Valid Users: ');
  validUsers.map((element) => {
    console.log(element);
  });
  console.log('No. of valid users: ', validUsers.length);
  console.log('Invalid Users: ');
  invalidUsers.map((element) => {
    console.log(element);
  });
  console.log('No. of Invalid users: ', invalidUsers.length);
};

export default validateUsers;