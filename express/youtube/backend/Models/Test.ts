export class Test {
  private msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }

  public getMsg() {
    return this.msg;
  }

  public setMsg(msg: string) {
    this.msg = msg;
  }
}
