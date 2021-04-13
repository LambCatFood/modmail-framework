const app = require('express')();

app.get('/', (req, res) => res.send('Server is up.'));

port = Math.floor(Math.random(2000, 9000))
module.exports = () => {
  app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
  });
}
