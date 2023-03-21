import Account from "./Account";

class Youth extends Account {
  constructor(accountNumber: number, owner: string) {
    super(accountNumber, owner, 0);
  }
}
