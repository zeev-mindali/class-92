import { Test } from "../Models/Test";

const sendOK = () => {
  let test = new Test("All is OK");
  return test;
};

const sendBAD = () => {
  let test = new Test("All is BAD");
  return test;
};

export { sendOK, sendBAD };
