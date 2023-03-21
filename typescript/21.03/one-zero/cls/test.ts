class Test {
  private user: string;
  private password: string;

  constructor(user: string, password: string) {
    this.user = user;
    this.password = password;
  }

  public login = (user: string, password: string): boolean => {
    return this.user === user && this.password === password;
  };

  public setName = (user: string) => {
    //check if the current user can change it
    if (this.user === "zeev") {
      this.user = user;
    } else {
      console.log("Where The Food?");
    }
  };

  public getName = () => {
    return this.user;
  };
}

export default Test;
