import IEntity from './interface/entity.interface';

class Entity implements IEntity {
  private _id: string;
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
}

export default Entity;
