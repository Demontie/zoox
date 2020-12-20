import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IStatesRepository from '@modules/states/repositories/IStatesRepository';
import City from '../infra/typeorm/schemas/City';
import ICitiesRepository from '../repositories/ICitiesRepository';

interface IRequest {
  name: string;
  state_id: string;
}

@injectable()
class CreateCityService {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,

    @inject('StatesRepository')
    private statesRepository: IStatesRepository,
  ) {}

  public async execute({ name, state_id }: IRequest): Promise<City> {
    const state = await this.statesRepository.findById(state_id);

    if (!state) {
      throw new AppError('Estado não encontrado.');
    }

    const city = await this.citiesRepository.create({ name, state });
    return city;
  }
}

export default CreateCityService;
