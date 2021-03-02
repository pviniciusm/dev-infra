import express, { Response } from 'express';
import Infra from './infra';

const app = express();
app.use(express.json());

const router = express.Router();
router.get('/', (req, res) => {
  Infra.ApiResponse.failure(res, new Infra.RequiredFieldError('Password'), 404);
});

router.get('/teste', (req, res: Response) => {
  Infra.ApiResponse.success(res, new Infra.Success('Opa!', 'Operação realizada com sucesso'), 201);
});

app.use(router);

app.listen(3333);
