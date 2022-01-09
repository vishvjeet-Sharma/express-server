import {IEmailType, IUserType} from './interfaces';

const permissions : IUserType = {
  ['getUsers']: {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: [],
  },
};

const users : IEmailType[] = [
  {
    traineeEmail: 'shubham@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
  },
  {
    traineeEmail: 'anurag@successive.tech',
    reviewerEmail: 'reviewer2@successive.tech',
  },
  {
    traineeEmail: 'parmeet@successive.tech',
    reviewerEmail: 'reviewer3@successive.tech',
  },
  {
    traineeEmail: 'abc@gmail.tech',
    reviewerEmail: 'abc@gmail.com',
  },
];

export {permissions, users};