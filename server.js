'use strict';

//application dependancies
const express = require('express');
const cors = require('cors');
const pg = require('pg');

//application setup
const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;

//database setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

//application middleware
app.use(cors());

//api endpoints
app.get('/api/vi/books', (req, res) => {
  client.query(`SELECT book_id, title, author, image_url, isbn FROM books;`)
  .then(results => res.send(results.rows))
  .catch(console.error);
});
app.get('*', (req, res) => res.redirect(CLIENT_URL));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));



// const conString = 'postgres://localhost:5432';

app.get('/test', (req, res) => res.send('Testing 1, 2, 3'));


JSON.parse()

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    books(id serial primary key, author varchar(255), title varchar(255), isbn varchar(255), image_url varchar(255), description varchar(255));
    `)
}



