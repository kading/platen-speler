import * as http from "http";
import {exec} from "child_process";

const port = 8001;

const server = http.createServer((_, res) => {
  console.log("Incoming connection")

  const command = 'sudo service platenspeler restart';
  // const command = "watch -t date"
  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.writeHead(500);
      res.end(`ERROR: ${error.message}`);
      return;
    }

    if (stderr) {
      res.writeHead(500);
      res.end(`STD_ERROR: ${stderr}`);
      return;
    }

    res.writeHead(200);
    res.end(`${stdout}`);
  });
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
