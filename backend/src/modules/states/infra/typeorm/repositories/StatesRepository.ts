import { getMongoRepository, MongoRepository } from 'typeorm';

import IStatesRepository from '@modules/states/repositories/IStatesRepository';
import ICreateStateDTO from '@modules/states/dtos/ICreateStateDTO';

import State from '../schemas/State';

class StatesRepository implements IStatesRepository {
  private ormRepository: MongoRepository<State>;

  constructor() {
    this.ormRepository = getMongoRepository(State, 'mongo');
  }

  public async findById(id: string): Promise<State | undefined> {
    const state = await this.ormRepository.findOne(id);

    return state;
  }

  public async findAllStates(): Promise<State[]> {
    const states = await this.ormRepository.find();
    return states;
  }

  public async remove(state: State): Promise<State> {
    await this.ormRepository.delete(state);
    return state;
  }

  public async create({ name, shortname }: ICreateStateDTO): Promise<State> {
    const state = this.ormRepository.create({
      name,
      shortname,
    });

    await this.ormRepository.save(state);

    return state;
  }

  public async update(state: State): Promise<State> {
    return this.ormRepository.save(state);
  }
}

export default StatesRepository;
