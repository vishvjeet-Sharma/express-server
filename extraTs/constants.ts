import {IEmailType, IUserType} from './interfaces';

const trainee: string = 'trainee';
const trainer: string = 'trainer';
const headTrainer: string = 'head-trainer';
const Users: string = 'users';
const Trainees: string = 'trainees';

const permissions: IUserType = {
  [Users]: {
    all: [headTrainer],
    read : [trainee, headTrainer, trainer],
    write : [trainer, headTrainer],
    delete: [trainer, headTrainer],
  },
  [Trainees]: {
    all: [headTrainer],
    read : [trainee, trainer, headTrainer],
    write : [trainer, headTrainer],
    delete: [headTrainer],
  }
};

const users : IEmailType[] = [
  {
    traineeEmail: 'Vishvjeet@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
  }
];

export {permissions, users, Trainees, Users};
export const BCRYPT_SALT_ROUNDS: number = 5;

