import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import citiesRoutes from '@modules/cities/infra/http/routes/cities.routes';
import statesRoutes from '@modules/states/infra/http/routes/states.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/states', statesRoutes);
routes.use('/cities', citiesRoutes);

export default routes;
