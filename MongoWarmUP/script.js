import chance from 'chance';
import User from './User';
let Chance = new chance();
export default (number) => {
//    console.log(`I will be generating ${number} number of Users.`);
    for(let i = 0; i < number; i++){
        User.create({
            name: Chance.name(),
            email: Chance.email(),
        });
    }
};
