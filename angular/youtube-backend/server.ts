//imports
import bodyParser from "body-parser";
import cors from "cors"; //npm install cors
import express from "express";
import fileUpload from "express-fileupload";
import loginRouter from "./Routes/LoginRoutes";
import router from "./Routes/VideoRoutes";
import config from "./Utils/config";
import logic from "./Logic/VideoLogicMYSQL";
import ErrorHandler from "./MiddleWare/route-not-found";

//create server
const server = express();

//handle cors
server.use(cors());

//how we send the data back (JSON,XML,RAW,String)
server.use(express.json());

//where i will save the video files
server.use(express.static("user_videos"));

//enable file uploading, and create a path for the files if it not exists
server.use(fileUpload({ createParentPath: true }));

//parse the body as json , for easy work
server.use(bodyParser.json());

//how to use the routes
//all categories (becuase of hila) => http://localhost:8080/api/v1/videos/newCat/catName
server.use("/api/v1/videos", router);
server.use("/api/v1/users", loginRouter);

//create our tables if they not exists
console.log("check if table exists...");
logic.createSongsTable();
logic.createCategoriesTable();

//handle errors (route not found)
server.use("*", ErrorHandler);

//start the server
server.listen(config.WebPort, () => {
  console.log(`listinging on http://${config.mySQLhost}:${config.WebPort}`);
});
