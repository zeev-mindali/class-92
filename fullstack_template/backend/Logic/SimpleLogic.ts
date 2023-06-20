import { SimpleModal } from "../Models/SimpleModel";

const MockData = () => {
  let mockData: SimpleModal[] = [];
  mockData.push(new SimpleModal(1, "OK"));
  mockData.push(new SimpleModal(2, "BAD"));

  return MockData;
};

export { MockData };
