import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import State from '../infra/typeorm/schemas/State';
import IStatesRepository from '../repositories/IStatesRepository';

interface IRequest {
  id: string;
  name: string;
  shortname: string;
}

@injectable()
class UpdateStateService {
  constructor(
    @inject('StatesRepository')
    private statesRepository: IStatesRepository,
  ) {}

  public async execute({ id, name, shortname }: IRequest): Promise<State> {
    const state = await this.statesRepository.findById(id);

    if (!state) {
      throw new AppError('Estado não encontrado.');
    }

    state.name = name;
    state.shortname = shortname;

    return this.statesRepository.update(state);
  }
}

export default UpdateStateService;
