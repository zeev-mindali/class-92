export class Example {
  private id: number;
  private msg: string;

  constructor(id: number, msg: string) {
    this.id = id;
    this.msg = msg;
  }

  public getId() {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getMsg() {
    return this.msg;
  }

  public setMsg(msg: string) {
    this.msg = msg;
  }
}
