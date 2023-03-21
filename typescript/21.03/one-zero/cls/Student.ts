import Account from "./Account";
import OverDraftAble from "../interfaces/OverDraftAble";

class Student extends Account implements OverDraftAble {
  constructor(accountNumber: number, owner: string) {
    super(accountNumber, owner, 0);
  }
}

export default Student;
