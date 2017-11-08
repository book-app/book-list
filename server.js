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
//
// const DATABASE_URL = postgres://dkptmftjrwbghc:eff31dc8880e0b34a9c151e133a77fac09137189e6be52af0bdb2c7151d99903@ec2-50-16-202-213.compute-1.amazonaws.com:5432/d4r0f3cgjqknfj
