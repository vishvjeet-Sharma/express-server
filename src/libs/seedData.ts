import UserRepository from '../repositories /user /UserRepository';
import config from '../config/configuration';
import * as bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from '../../extraTs/constants';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            console.log('Number of Data Count', res);

            if (res === 0) {
                const salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
                const hash = bcrypt.hashSync(config.password, salt);
                console.log('Data seeding in progrss......');
                userRepository.create(
                    {
                        name: 'Gaurav',
                        role: 'head-trainer',
                        email: 'Gaurav@successive.tech',
                        password: hash,
                    }
                );
                userRepository.create(
                    {
                        name: 'Vishvjeet',
                        role: 'trainee',
                        email: 'Vishvjeet@successive.tech',
                        password: hash,
                    }
                );
                console.log('Data seeded successfully');
            }
        }).catch(err => console.log(err));
};