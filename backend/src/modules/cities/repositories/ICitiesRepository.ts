import State from '@modules/states/infra/typeorm/schemas/State';
import City from '../infra/typeorm/schemas/City';
import ICreateCityDTO from '../dtos/ICreateCityDTO';

export default interface ICitiesRepository {
  create(data: ICreateCityDTO): Promise<City>;
  findAllCities(): Promise<City[] | undefined>;
  update(city: City): Promise<City>;
  remove(city: City): Promise<City>;
  findById(id: string): Promise<City | undefined>;
  removeState(state: State): Promise<State>;
}
