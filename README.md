# book-list-client
Code Fellows 301 - week 3 project

**Authors**: Will Reid & Jeff Martinez
**Version**: 1.0.1

## Overview
Our goal with this project was to build a mobile-only site to organize a list of books.  The books themselves will be stored in a table (eventually in multiple tables after we normalize the data) in a postgresql instance.  In time we will make the site appropriately elegant.

## Getting Started
To build this app on your own machine, clone this repo and launch the html page in your browser. You will need to install node, express, filesystem, and bodyParser using npm install -save <library>.  To be able to push and pull, you'll need to become a colaborator on the organization at https://github.com/book-app and the pipeline at https://dashboard.heroku.com/apps/book-app-cf301.

## Architecture
We are using a SMACSS organization of our CSS. The index.html file reveals the basic template for each book record.  We are using a page.js library, jQuery and Handlebar.

## Change Log
11-07-2017 10am -- initial commit with two repositories
11-07-2017 11:30am -- deployed to gh-pages and Heroku
11-07-2017 1pm -- linked with Heroku and created a table
11-08-2017 10am -- update server.js file
11-08-2017 11:30am -- build out book-view and error-view filesystem
11-08-2017 1:30pm -- troubleshoot global variables

## Credits and Collaborations
We'd like to thank Ron Dunphy for his excellent explanation of the link between the client side and server side.


# Dependencies
This app includes dependancies on node_js, postgres, filesystem, express, and body-parser.

# Other notes:
postgres://dkptmftjrwbghc:eff31dc8880e0b34a9c151e133a77fac09137189e6be52af0bdb2c7151d99903@ec2-50-16-202-213.compute-1.amazonaws.com:5432/d4r0f3cgjqknfj
