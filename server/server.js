const app = require('./server-config.js')
const mongoose = require('mongoose');


const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  console.log('listening on 8000');
});


module.exports = app;
