export const permissions = {
  getUsers: {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: [],
  },
};

export const users = [
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
