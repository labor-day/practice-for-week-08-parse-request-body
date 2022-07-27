const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here

const http = require('http');
const port = 5000;

let serverFunction = (req, res) => {

  console.log(req.method);
  console.log(req.url);

  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    req.body = parseBody(reqBody);
    sendFormPage(req, res);
  });
}

server = http.createServer(serverFunction);

let logFunction = () => {
  console.log('Server is listening on port', port);
}

server.listen(port, logFunction);

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
