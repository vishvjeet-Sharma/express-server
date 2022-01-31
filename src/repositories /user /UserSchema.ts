import * as mongoos from 'mongoose';

export default class UserSchema extends mongoos.Schema{
    constructor(collections:any){
        const baseScheme = Object.assign({
            _id : String,
            name :  String,
            email : String,
            role : String,
            password : String,
        });
        super(baseScheme, collections);
    }
}