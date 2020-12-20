import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';

import State from '../infra/typeorm/schemas/State';
import IStatesRepository from '../repositories/IStatesRepository';

interface IRequest {
  name: string;
  shortname: string;
}

@injectable()
class CreateStateService {
  constructor(
    @inject('StatesRepository')
    private statesRepository: IStatesRepository,
  ) {}

  public async execute({ name, shortname }: IRequest): Promise<State> {
    const state = await this.statesRepository.create({ name, shortname });
    return state;
  }
}

export default CreateStateService;
