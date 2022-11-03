const path = require('path');

const middleware = {
   getIndex: (req, res) => {
      res.render('index');
   },
   getHtml: (req, res) => {
      res.sendFile(path.join(__dirname,'../views/example.html'));
   },
   getText: (req, res) => {
      res.send(`
      <h1>HTML TEXT displayed by res.send()</h1>
      `);
   },
}

module.exports = middleware;