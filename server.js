const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

app.use(express.json());
app.use(cors());

// listen to the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
