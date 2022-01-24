import { strictEqual } from 'assert';
import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;
    constructor(model){
        this.model = model;
    }
    protected static createObjectId() {
        return String(new mongoose.Types.ObjectId());
    }
    
    public async create(data: any): Promise<D> {
        const id = VersionableRepository.createObjectId();
        console.log(id);
        const model = new this.model({
            _id: id,
            originalId: id,
            ...data,
        })
        return await model.save();        
    }
    protected async findOne(query: any): Promise<D> {
        const finalQuery = { deletedAt: undefined, ...query };
        return await this.model.findOne(finalQuery).lean();        
    }

    public async findAll(query: any= {}, projection: any={}, options: any= {} ): Promise<D[]> {
        const finalQuery: any = { deleteAt: undefined, ...query };
        return await this.model.find(finalQuery, projection, options);
    }
    public async count(): Promise<number> {
        const finalQuery = {deleteAt: undefined};
        return await this.model.count(finalQuery);
    }
    softDelete({ originalId }) {
        return this.model.updateOne({originalId, deleteAt: undefined}, {deletedAt: Date.now()});
    }
    public async update(filterQuery: any, data): Promise<D>{
        const prevData: any = await this.findOne({...filterQuery});
        if (prevData) {
            const { originalId } = prevData;
            await this.softDelete({ originalId })
        } else {
            return undefined;
        }
        const newData = { ...prevData, ...data };
        newData._id = VersionableRepository.createObjectId();
        const model = new this.model(newData);
        return await model.save();
    }
}