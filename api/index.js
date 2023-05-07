const express = require('express');
const mysql = require('mysql');

require('env').config();

const server = express();

// Config API
const API_PORT = process.env.API_PORT || 9001;
const API_HOST = process.env.API_HOST;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Connect to the Database
connection.connect();

// API Request
const handleDataSource = (data) => {
  return data.map(item => (
    {
      name: item.name,
      email: item.email,
    }
  ));
}

const handleUsers = () => {
  connection.query('SELECT * FROM users', (error, result) => {
    if (error)  {
      throw error;
    }

    res.send(handleDataSource(result))
  });
};

server.get('/users', handleUsers());


// Server Bootstrap
server.listen(API_PORT, API_HOST, () => {
  console.log(`Running server on ${API_HOST}:${API_PORT}`)
});