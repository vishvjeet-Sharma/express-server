import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository<any, mongoose.Model<IUserModel>> {
  constructor() {
    super(userModel);
  }
  public async findOne(query): Promise<IUserModel> {
    return await super.findOne(query);
  }
  public async find(query, projection?: any, options?: any): Promise<IUserModel[]> {
    return await super.findAll(query, projection, options);
  }
  public async count(): Promise<number> {
    return await super.count();
  }
  public async create(data: any): Promise<IUserModel> {
    return await super.create(data);
  }
  public updateData(filterQuery: any, data): mongoose.UpdateQuery<IUserModel> {
    return super.update(filterQuery, data);
  }
  public delete(data: any): mongoose.Query<object, IUserModel> {
    return super.softDelete(data);
  }
}