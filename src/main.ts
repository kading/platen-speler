import * as http from "http";
import {exec} from "child_process";

const port = 8000;

const server = http.createServer((_, res) => {

  exec('sudo python stream.py', (error, stdout, stderr) => {
    if (error) {
      res.writeHead(500);
      res.end(`error: ${error.message}`);
      return;
    }

    if (stderr) {
      res.writeHead(500);
      res.end(`stderr: ${stderr}`);
      return;
    }

    res.writeHead(200);
    res.end(`stdout:\n${stdout}`);
  });
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
