import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCityService from '@modules/cities/services/CreateCityService';
import DeleteCityService from '@modules/cities/services/DeleteCityService';
import ListAllCityService from '@modules/cities/services/ListAllCityService';
import UpdateCityService from '@modules/cities/services/UpdateCityService';

export default class CitiesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, state_id } = request.body;

    const createCity = container.resolve(CreateCityService);

    const city = await createCity.execute({
      name,
      state_id,
    });

    return response.json(city);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, state_id } = request.body;
    const { id } = request.params;

    const updateCity = container.resolve(UpdateCityService);

    const city = await updateCity.execute({
      id,
      name,
      state_id,
    });

    return response.json(city);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const ListCity = container.resolve(ListAllCityService);

    const cities = await ListCity.execute();

    return response.json(cities);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const createCity = container.resolve(DeleteCityService);

    const city = await createCity.execute({
      id,
    });

    return response.json(city);
  }
}
