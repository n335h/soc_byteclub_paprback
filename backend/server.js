import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
import cors from "cors";
import { getBooks, postListing } from "./helper.js";

export const { Client } = pkg;
dotenv.config();

const app = express();
const port = process.env.PORT || 5432; // default port to listen

const connectionString = process.env.DB_CONNECTION_STRING;
const apiKey = process.env.API_KEY;
 
//Hello!!!

// middleware
app.use(cors());
app.use(express.json());

// Create a database client
const client = new Client({
  connectionString: connectionString, // Use 'connectionString' instead of 'dbConnectionString'
});

// Connect to the database
client.connect();

// routes

app.get("/", (req, res) => {
  res.json({
    status: true,
    payload: "This route works!",
  });
});

// Get all books
app.get("/api/books", async function (req, res) {
  try {
    const result = await client.query("SELECT * FROM books");

    if (result.rows.length > 0) {
      res.json({ success: true, payload: result.rows });
    } else {
      res.send("No books found");
    }
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Get a single book by title
app.get("/api/books/:title", async function (req, res) {
  try {
    const result = await client.query("SELECT * FROM books WHERE LOWER(title) = $1", [
      req.params.title.toLowerCase()
    ]);
    if (result.rows.length > 0) {
      res.json({ success: true, payload: result.rows });
    } else {
      res.send("No book found");
    }
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Get a single book from Listings by isbn
app.get("/api/listings/:isbn", async function (req, res) {
  try {
    const result = await client.query(
      "SELECT * FROM listings WHERE isbn = $1",
      [req.params.isbn]
    );
    const book = result.rows[0];
    if (book) {
      res.json({ success: true, payload: result.rows });
    } else {
      res.send("No book found");
    }
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Get book from listings by title
app.get("/api/listings/:title", async function (req, res) {
  try {
    const result = await client.query(
      "SELECT * FROM listings WHERE LOWER(title) = $1",
      [req.params.title.toLowerCase()]
    );
    if (result.rows.length > 0) {
      res.json({ success: true, payload: result.rows });
    } else {
      res.send("No listing found");
    }
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// app.get("/api/listings/:title", async function (req, res) {
//   try {
//     const searchTerm = req.params.title.toLowerCase(); // Convert the search term to lowercase

//     const result = await client.query(
//       "SELECT * FROM listings WHERE LOWER(title) = $1",
//       [searchTerm]
//     );

//     if (result.rows.length > 0) {
//       res.json({ success: true, payload: result.rows });
//     } else {
//       res.send("No listing found");
//     }
//   } catch (error) {
//     console.error("Error executing query:", error);
//     res.status(500).json({ success: false, error: "Internal server error" });
//   }
// // });


// Get a single book from books table by isbn or title
app.get("/api/books/:isbntitle", async function (req, res) {
  try {
    const result = await client.query(
      "SELECT * FROM listings WHERE isbn = $1 OR LOWER(title) = $1",
      [req.params.isbntitle.toLowerCase()]
    );
    const book = result.rows[0];
    if (book) {
      res.json({ success: true, payload: result.rows });
    } else {
      res.send("No book found");
    }
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Get all Listings
app.get("/api/listings", async function (req, res) {
  try {
    const result = await client.query("SELECT * FROM listings");

    if (result.rows.length > 0) {
      res.json({ success: true, payload: result.rows });
    } else {
      res.send("No books found");
    }
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// List a book
app.post("/api/listings", async function (req, res) {
  try {
    const result = await postListing(client, req.body);

    if (result) {
      res.json({ success: true, payload: result });
    } else {
      res.status(500).json({ success: false, error: "Book not listed" });
    }
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Delete a Listing
app.delete("/api/listings/:id", async function (req, res) {
  try {
    const result = await client.query("DELETE FROM listings WHERE id = $1", [
      req.params.id,
    ]);
    if (result) {
      res.json({ success: true, payload: result.rows });
    } else {
      res.send("Listing not deleted");
    }
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Close the database connection when the server is stopped
process.on("SIGINT", () => {
  client
    .end()
    .then(() => {
      console.log("Database connection closed");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error closing database connection:", error);
      process.exit(1);
    });
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// async function getBooksFromDatabase() {

//   try {
//     await client.connect();

//     const result = await client.query('SELECT * FROM books');
//     console.log(result.rows);
//   } catch (error) {
//     console.error('Error executing query:', error);
//   } finally {
//     await client.end();
//   }
// }

// getBooksFromDatabase();
