//imports
import bodyParser from "body-parser";
import cors from "cors"; //npm install cors
import express from "express";
import fileUpload from "express-fileupload";
import config from "./Utils/config";
import ErrorHandler from "./MiddleWare/route-not-found";
import { myBanner } from "./Utils/banner";

import loginRouter from "./Routes/LoginRoutes";

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
server.use("/api/user", loginRouter);

//handle errors (route not found)
server.use("*", ErrorHandler);

console.log(myBanner);

//start the server
server.listen(config.WebPort, () => {
    console.log(`listinging on http://${config.mySQLhost}:${config.WebPort}`);
});
