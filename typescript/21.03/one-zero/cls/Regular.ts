import LoanAble from "../interfaces/LoanAble";
import OverDraftAble from "../interfaces/OverDraftAble";
import Account from "./Account";

class Regular extends Account implements LoanAble, OverDraftAble {
  constructor(accountNumber: number, owner: string) {
    super(accountNumber, owner, 5);
  }
}

export default Regular;
