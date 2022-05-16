const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if('palindrome' in params){
        const wordCheck = params["palindrome"]
        const isPalin = (reWordCheck) => {
            reWordCheck = reWordCheck.replace(/\w/g, '')
            reWordCheck = reWordCheck.toLowerCase()

            return reWordCheck === reWordCheck.split('').reverse().join('')
        }
        console.log(isPalin(wordCheck))
      
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
        }
        res.end(JSON.stringify(objToJson));
      }
    }
    server.listen(8000);
