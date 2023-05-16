import mysql from "mysql";
import config from "./Config";

//create a connection object to mysql server....
const connection = mysql.createPool({
  host: config.mysql_host,
  user: config.mysql_user,
  password: config.mysql_password,
  database: config.mysql_database,
  port: config.mysql_port,
});

//create an execute command so we can send SQL statements
const execute = (sql: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    connection.query(sql, (err, res) => {
      //Huston, we have a problem
      if (err) {
        reject(err);
        console.log("my sql error : ", err);
        return;
      }
      //no error
      resolve(res);
    });
  });
};

export default { execute };
