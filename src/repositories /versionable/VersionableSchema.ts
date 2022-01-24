import * as mongoose from 'mongoose';

class VersionableSchema extends mongoose.Schema {
    constructor(options: any, collections: any) {
        const verionOption = Object.assign({
            createdAt: {
                default: Date.now,
                type: Date,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            originalId: {
                required: true,
                type: String,
            }
        }, options);
        super(verionOption, collections);
    }
}
export default VersionableSchema;