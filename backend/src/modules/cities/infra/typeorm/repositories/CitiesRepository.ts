import { getMongoRepository, MongoRepository } from 'typeorm';

import ICitiesRepository from '@modules/cities/repositories/ICitiesRepository';
import ICreateCityDTO from '@modules/cities/dtos/ICreateCityDTO';

import State from '@modules/states/infra/typeorm/schemas/State';
import City from '../schemas/City';

class CitiesRepository implements ICitiesRepository {
  private ormRepository: MongoRepository<City>;

  constructor() {
    this.ormRepository = getMongoRepository(City, 'mongo');
  }

  public async findById(id: string): Promise<City | undefined> {
    const city = await this.ormRepository.findOne(id);

    return city;
  }

  public async findAllCities(): Promise<City[]> {
    const cities = await this.ormRepository.find();
    return cities;
  }

  public async remove(city: City): Promise<City> {
    await this.ormRepository.delete(city);
    return city;
  }

  public async removeState(state: State): Promise<State> {
    await this.ormRepository.delete(state);
    return state;
  }

  public async create({ name, state }: ICreateCityDTO): Promise<City> {
    const city = this.ormRepository.create({
      name,
      state,
    });

    await this.ormRepository.save(city);

    return city;
  }

  public async update(city: City): Promise<City> {
    return this.ormRepository.save(city);
  }
}

export default CitiesRepository;
