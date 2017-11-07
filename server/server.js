'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
// const app = express();
const conString = 'postgres://localhost:5432';
// const client = new pg.Client(conString);
// client.connect();
// client.on('error', err => {
//   console.error(err);
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('./client'));

// app.get('/new', (request, response) => response.sendFile('new.html', {root: './public'}));

// app.post('/articles', (request, response) => {
//   client.query(
//     'INSERT INTO authors(author, "authorUrl") VALUES($1, $2) ON CONFLICT DO NOTHING',
//     [request.body.author, request.body.authorUrl],
//     function(err) {
//       if (err) console.error(err)
//       queryTwo()
//     }
//   )

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());

app.get('/', (req, res) => res.send('Testing 1, 2, 3'));

app.get('/books', (req, res) => {
  client.query(`SELECT * from books;`)
    .then(results => res.send(results.rows))
    .catch(console.error);
});

app.get('*', (req, res) => res.redirect(CLIENT_URL));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    tasks(id serial primary key, title varchar(255), description varchar(255), contact varchar(255), status varchar(255), category varchar(255), due varchar(255));
    `)
}
