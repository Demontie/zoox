import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import StatesController from '../controllers/StatesController';

const statesRouter = Router();
const statesController = new StatesController();

statesRouter.use(ensureAuthenticated);

statesRouter.post('/', statesController.create);

statesRouter.get('/', statesController.show);

statesRouter.delete('/:id', statesController.delete);

statesRouter.put('/:id', statesController.update);

export default statesRouter;
