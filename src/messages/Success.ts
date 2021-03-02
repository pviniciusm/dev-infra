import Return from './Return';

class Success extends Return {
  constructor (data: any, message?: string, code?: number) {
    super(true, code || 200, message || 'Operation was successfully done.', data, false);
  }
}

export default Success;
