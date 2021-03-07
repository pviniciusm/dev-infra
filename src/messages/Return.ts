class Return {
  public ok: boolean;
  public message: string;
  public data: any;
  public isException: boolean;
  public code: number;
  public identifier: string;

  constructor (ok: boolean, code: number, message: string, data?: any, isException?: boolean, identifier?: string) {
    this.data = data || undefined;
    this.message = message;
    this.ok = ok;
    this.code = code;
    this.isException = isException || false;
    this.identifier = identifier || 'Return';
  }

  get = () => {
    return {
      data: this.data,
      message: this.message,
      ok: this.ok,
      exception: this.isException,
      identifier: this.identifier
    };
  };
}

export default Return;
