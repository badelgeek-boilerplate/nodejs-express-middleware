const middleware = {
   get404: (req, res) => {
      res.render('404');
   }
}

module.exports = middleware;