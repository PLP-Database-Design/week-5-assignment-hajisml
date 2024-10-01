// requirements and dependancies
const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

app.use(express.json());
app.use(cors());
dotenv.config();

// connecting to database
db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

db.connect((err) => {
  if (err) {
    return console.log(`Error connecting to database`)
  }
  console.log(`Connected successfully to database with id: ${db.threadId}`)
})

// listen to the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  app.get('/', (req, res) => {
    res.send(`Server is up and running`)
  })
});
