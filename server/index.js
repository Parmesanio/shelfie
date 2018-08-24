const express       = require('express'),
      bodyParser    = require('body-parser'),
      massive       = require('massive'),
      PORT          = 4000,
      app           = express();
      require('dotenv').config();

app.use(bodyParser.json());

//MASSIVE CONFIG
massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
    }).catch(err => console.log('Error in massive', err));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));