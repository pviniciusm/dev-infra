import { Response } from 'express';
import Return from '../messages/Return';

class ApiResponse {
  static success (res: Response, data: Return, code?: number) {
    return res.status(code || 200).send(data);
  }

  static exception (res: Response, data: Return, code?: number) {
    return res.status(code || 500).send(data);
  }

  static failure (res: Response, data: Return, code?: number) {
    return res.status(code || 400).send(data);
  }
}

export default ApiResponse;
