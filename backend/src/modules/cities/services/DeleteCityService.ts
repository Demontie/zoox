import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import City from '../infra/typeorm/schemas/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<City> {
    const city = await this.citiesRepository.findById(id);

    if (!city) {
      throw new AppError('Cidade não encontrado.');
    }

    return this.citiesRepository.remove(city);
  }
}

export default DeleteCityService;
