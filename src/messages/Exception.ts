import Return from './Return';

class Exception extends Return {
  constructor (message: string, code?: number, identifier?: string) {
    super(false, code || 500, message || 'There is an exception here. Do not worry, just call the admin.', undefined, true, identifier);
  }
}

class RequiredFieldException extends Exception {
  constructor (field: string) {
    super(field + ' is required.', 500, 'RequiredFieldException');
  }
}

export { RequiredFieldException, Exception };
