/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import validateEmail from './helpers';

const validUsers = [];
const invalidUsers = [];

const validateUsers = (users) => {
  users.map((element) => {
    const { traineeEmail, reviewerEmail } = element;
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
    return element;
  });
  console.log('No. of valid users: ', validUsers.length);
  console.log('Invalid Users: ');
  invalidUsers.map((element) => {
    console.log(element);
    return element;
  });
  console.log('No. of Invalid users: ', invalidUsers.length);
};

export default validateUsers;
