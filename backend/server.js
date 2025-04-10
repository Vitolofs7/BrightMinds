import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import http from 'http';
import app from './index.js'; // <-- importa el default export de index.js

dotenv.config();

const port = process.env.PORT || 8080;
let protocol = http;
let options = {};

if (process.env.HTTPS && process.env.HTTPS === "true") {
  protocol = https;
  options = {
    key: fs.readFileSync(process.env.SERVER_KEY),
    cert: fs.readFileSync(process.env.SERVER_CERT),
  };
}

protocol.createServer(options, app).listen(port, () => {
  console.log(`Server started on: ${port}`);
});
