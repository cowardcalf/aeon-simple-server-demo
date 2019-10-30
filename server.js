import body_parser from "body-parser";
import cors from "cors";
import express from "express";
import getAeonServices from "./aeonServices";
import getSampleServices from "./sampleServices";

let server = express();

// parse JSON (application/json content-type)
server.use(body_parser.json());

// Enable the CORS
server.use(cors());

// Note: the server object will be changed
// in these get services calls
getSampleServices(server);

getAeonServices(server);

export default server;