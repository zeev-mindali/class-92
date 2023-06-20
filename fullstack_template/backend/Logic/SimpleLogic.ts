import { SimpleModal } from "../Models/SimpleModel";
import axios from "axios";
import dal_mysql from "../Utils/dal_mysql";

const MockData = () => {
    let mockData: SimpleModal[] = [];
    mockData.push(new SimpleModal(1, "OK"));
    mockData.push(new SimpleModal(2, "BAD"));

    return MockData;
};

const getAll = async () => {
    const sql = "SELECT * FROM mytest";
    const all = await dal_mysql.execute(sql);
    console.log(all);
    return all;
}

export { MockData, getAll };
