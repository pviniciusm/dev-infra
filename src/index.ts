import express, { Response } from 'express';
import Infra from './infra';

const app = express();
app.use(express.json());

const router = express.Router();
router.get('/', (req, res) => {
  Infra.ApiResponse.failure(res, new Infra.InexistentEntryError('Password'));
});

router.get('/teste', (req, res: Response) => {
  Infra.ApiResponse.success(res, new Infra.Success('Opa!', 'Operação realizada com sucesso'));
});

app.use(router);

app.listen(3333);
