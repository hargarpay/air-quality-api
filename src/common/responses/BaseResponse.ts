export class BaseResponse<T> {
  result?: T;

  constructor(result: T) {
    this.result = result;
  }
}
