import express from 'express';
import Infra from './infra';

const app = express();
app.use(express.json());

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).send({
    body: req.body,
    data: new Infra.RequiredFieldError('Password')
  });
});

router.get('/teste', (req, res) => {
  res.status(200).send({
    body: req.query,
    data: new Infra.Success({ name: 'any data' }, 'Success!!')
  });
});

app.use(router);

app.listen(3333);
