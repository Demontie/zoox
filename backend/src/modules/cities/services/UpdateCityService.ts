import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStatesRepository from '@modules/states/repositories/IStatesRepository';

import City from '../infra/typeorm/schemas/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

interface IRequest {
  id: string;
  name: string;
  state_id: string;
}

@injectable()
class UpdateCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,

    @inject('StatesRepository')
    private statesRepository: IStatesRepository,
  ) {}

  public async execute({ id, name, state_id }: IRequest): Promise<City> {
    const state = await this.statesRepository.findById(state_id);

    if (!state) {
      throw new AppError('Estado não encontrado.');
    }

    const city = await this.citiesRepository.findById(id);

    if (!city) {
      throw new AppError('Cidade não encontrado.');
    }

    city.name = name;
    city.state = state;

    return this.citiesRepository.update(city);
  }
}

export default UpdateCityService;
