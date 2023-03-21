import LoanAble from "../interfaces/LoanAble";
import OverDraftAble from "../interfaces/OverDraftAble";
import Account from "./Account";

class Bussnies extends Account implements LoanAble, OverDraftAble {
  constructor(accountNumber: number, owner: string) {
    super(accountNumber, owner, 3);
  }
}

export default Bussnies;
