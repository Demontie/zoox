import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import State from '../infra/typeorm/schemas/State';
import IStatesRepository from '../repositories/IStatesRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteStateService {
  constructor(
    @inject('StatesRepository')
    private statesRepository: IStatesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<State> {
    const state = await this.statesRepository.findById(id);

    if (!state) {
      throw new AppError('Cidade não encontrado.');
    }

    return this.statesRepository.remove(state);
  }
}

export default DeleteStateService;
