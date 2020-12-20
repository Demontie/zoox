import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CitiesController from '../controllers/CitiesController';

const citiesRouter = Router();
const citiesController = new CitiesController();

citiesRouter.use(ensureAuthenticated);

citiesRouter.post('/', citiesController.create);

citiesRouter.get('/', citiesController.show);

citiesRouter.delete('/:id', citiesController.delete);

citiesRouter.put('/:id', citiesController.update);

export default citiesRouter;
