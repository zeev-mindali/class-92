import dal_mysql from "../Utils/dal_mysql";
import User from "../Models/User";
import { OkPacket } from "mysql";

const addUser = async (newUser: User) => {
    const sqlCommand = `
    INSERT INTO siteusers (user_name, user_email, password, user_create) 
    VALUES ('${newUser.user_name}','${newUser.user_email}','${newUser.password}','${newUser.user_create}');
    `
    const result: OkPacket = await dal_mysql.execute(sqlCommand);
    newUser.id = result.insertId;
    return newUser;
}

const deleteUser = async (id: number) => {
    const sqlCommand = `DELETE FROM siteusers WHERE id=${id}`;
    await dal_mysql.execute(sqlCommand);
}

const updateUser = async (updateUser: User) => {
    const sqlCommand = `
    UPDATE siteusers 
    SET
    user_name = '${updateUser.user_name}',
    user_email = '${updateUser.user_email}',
    password = '${updateUser.password}'
    WHERE (id=${updateUser.id});
    `;
    await dal_mysql.execute(sqlCommand);
}

const checkLogin = async (user: User) => {
    const sqlCommand = `SELECT count(*) as userok FROM siteusers WHERE user_name='${user.user_name}' AND password='${user.password}'`;
    const result = await dal_mysql.execute(sqlCommand);
    return result[0].userok == 1;
}

const getUserList = async () => {
    const sqlCommand = `SELECT id,user_name,user_email FROM siteusers`;
    const users = await dal_mysql.execute(sqlCommand);
    return users;
}

const test = () => {
    return "all working :)";
}

export default {
    addUser, deleteUser, updateUser, checkLogin, getUserList, test
}