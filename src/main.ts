import Return from './messages/Return';
import Success from './messages/Success';
import * as Errors from './messages/Error';
import * as Exceptions from './messages/Exception';
import ApiResponse from './api/ApiResponse';

const Infra = {
  Success,
  ...Errors,
  ...Exceptions
};

export default Infra;

export {
  Return,
  ApiResponse
};
