import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';

import City from '../infra/typeorm/schemas/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

@injectable()
class ListAllCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute(): Promise<City[] | undefined> {
    const city = await this.citiesRepository.findAllCities();
    return city;
  }
}

export default ListAllCityService;
