import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStateService from '@modules/states/services/CreateStateService';
import DeleteStateService from '@modules/states/services/DeleteStateService';
import ListAllStateService from '@modules/states/services/ListAllStateService';
import UpdateStateService from '@modules/states/services/UpdateStateService';

export default class StatesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, shortname } = request.body;

    const createState = container.resolve(CreateStateService);

    const city = await createState.execute({
      name,
      shortname,
    });

    return response.json(city);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, shortname } = request.body;
    const { id } = request.params;

    const updateState = container.resolve(UpdateStateService);

    const state = await updateState.execute({
      id,
      name,
      shortname,
    });

    return response.json(state);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const ListState = container.resolve(ListAllStateService);

    const states = await ListState.execute();

    return response.json(states);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const createState = container.resolve(DeleteStateService);

    const state = await createState.execute({
      id,
    });

    return response.json(state);
  }
}
