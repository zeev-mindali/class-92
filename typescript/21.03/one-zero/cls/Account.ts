import LoanAble from "../interfaces/LoanAble";

abstract class Account {
  accountNumber: number;
  owner: string;
  balance: number;
  commision: number;

  constructor(accountNumber: number, owner: string, commision: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = 0;
    this.commision = commision;
  }

  withdraw = (amount: number) => {
    this.balance -= amount * (1 + this.commision / 100);
  };

  deposit = (amount: number) => {
    this.balance += amount * (1 - this.commision / 100);
  };

  setCommsion = (commision: number) => {
    this.commision = commision;
  };

  getBalance = () => {
    return this.balance;
  };

  getLoan = (amount: number) => {
    if (this instanceof LoanAble) {
      console.log("Show me the money!!!!");
    } else {
      console.log("no soap for YOU !!!");
    }
  };
}

export default Account;
