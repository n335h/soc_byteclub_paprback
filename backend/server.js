import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
import cors from "cors";
import Routes from "./routes.js";

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
Routes(app, client);

// app.get("/", (req, res) => {
//   res.json({
//     status: true,
//     payload: "This route works!",
//   });
// });

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