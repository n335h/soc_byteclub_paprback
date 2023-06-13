import express from 'express';
import dotenv from 'dotenv';
import pkg from 'pg';
const { Client } = pkg;
dotenv.config();

// import {
//   getBooks
// } from "./helper.js";

const app = express();
const port = process.env.PORT || 5432; // default port to listen

const dbConnectionString = process.env.DB_CONNECTION_STRING;
const apiKey = process.env.API_KEY;



// middleware
app.use(express.json());


 const client = new Client({
    connectionString: dbConnectionString, // Use 'connectionString' instead of 'dbConnectionString'
  });

async function getBooksFromDatabase() {
 

  try {
    await client.connect();

    const result = await client.query('SELECT * FROM books');
    console.log(result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
  } finally {
    await client.end();
  }
}

getBooksFromDatabase();
  



// route

app.get("/", (req, res) => {
  res.json({
    status: true,
    payload: "This route works!",
  });
});

app.get("/books", async function (req, res) {
  const allBooks = await getBooks();
  if (allBooks) {
    res.json({success: true,
              payload: allBooks});
    
  } else {
    res.send("No books found")
  }
});

// app.get('/api/books', (req, res) => {
//   // Retrieve books from the database and send a response
//   res.send('List of books');
// });





app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});


