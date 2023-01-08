import * as http from "http";
import {execSync} from "child_process";

const port = 8001;

const server = http.createServer((_, res) => {
  console.log("Incoming connection")

  const command = 'sudo service platenspeler restart';
  // const command = "watch -t date"
  execSync(command);

  res.writeHead(200);
  res.end(`OK`);
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
