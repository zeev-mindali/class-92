import { Test } from "../Models/Test";

const sendOK = (verb: string, body?: string) => {
  if (body) {
    console.log(body);
  }
  let test = new Test(`${verb}=>All is OK`);
  return test;
};

const sendBAD = (verb: string) => {
  let test = new Test(`${verb}=>All is BAD`);
  return test;
};

export { sendOK, sendBAD };
