import State from '../infra/typeorm/schemas/State';
import ICreateStateDTO from '../dtos/ICreateStateDTO';

export default interface IStatesRepository {
  create(data: ICreateStateDTO): Promise<State>;
  findAllStates(): Promise<State[] | undefined>;
  update(city: State): Promise<State>;
  remove(city: State): Promise<State>;
  findById(id: string): Promise<State | undefined>;
}
