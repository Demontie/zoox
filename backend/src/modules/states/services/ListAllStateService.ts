import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';

import State from '../infra/typeorm/schemas/State';
import IStatesRepository from '../repositories/IStatesRepository';

@injectable()
class ListAllStateService {
  constructor(
    @inject('StatesRepository')
    private statesRepository: IStatesRepository,
  ) {}

  public async execute(): Promise<State[] | undefined> {
    const state = await this.statesRepository.findAllStates();
    return state;
  }
}

export default ListAllStateService;
