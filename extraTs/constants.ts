import {IEmailType, IUserType} from './interfaces';

const trainee: string = 'trainee';
const trainer: string = 'trainer';
const headTrainer: string = 'head-trainer';
const Users: string = 'users';
const Trainees: string = 'trainees';

const permissions: IUserType = {
  [Users]: {
    all: [headTrainer],
    read : [trainee, trainer],
    write : [trainer],
    delete: [],
  },
  [Trainees]: {
    all: [headTrainer],
    read : [trainee, trainer],
    write : [trainer],
    delete: [],
  }
};

const users : IEmailType[] = [
  {
    traineeEmail: 'parmeet@successive.tech',
    reviewerEmail: 'reviewer3@successive.tech',
  }
];

export {permissions,Users,Trainees, users};