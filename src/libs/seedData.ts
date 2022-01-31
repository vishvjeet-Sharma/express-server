import UserRepository from '../repositories /user /UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
    .then(res => {
        console.log('Number of Data Count', res);

        if (res === 0) {
            console.log('Data seeding in progrss...');
            userRepository.create(
                {
                    name: 'Gaurav',
                    role: 'head-trainer',
                    email: 'Gaurav@successive.tech',
                    password: 'Gaurav@123'
                }
            );
            userRepository.create(
                {
                    name: 'Vishvjeet',
                    role: 'trainee',
                    email: 'Vishvjeet@successive.tech',
                    password: 'Vishvjeet@123'
                }
            );
            console.log('Data seeded successfully');
        }
    }).catch(err => console.log(err));
};