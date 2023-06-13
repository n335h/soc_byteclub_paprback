import express from 'express';
import dotenv from 'dotenv';
import pkg from 'pg';
const { Client } = pkg;
dotenv.config();

const app = express();
const port = process.env.PORT || 5432; // default port to listen

const dbConnectionString = process.env.DB_CONNECTION_STRING;
const apiKey = process.env.API_KEY;



// middleware
app.use(express.json());



async function getBooksFromDatabase() {
  const client = new Client({
    connectionString: dbConnectionString, // Use 'connectionString' instead of 'dbConnectionString'
  });

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


// app.get('/api/books', (req, res) => {
//   // Retrieve books from the database and send a response
//   res.send('List of books');
// });





app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

