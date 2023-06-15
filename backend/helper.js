import fs from 'node:fs/promises';
import pkg from 'pg';
const { Client } = pkg;



export async function getBooks() {
  await Client.connect();
  const query = 'SELECT * FROM books;';
  const result = await Client.query(query);
  console.table(result.rows);
  return result.rows;
}

// post a new listing into the database
export async function postListing(newListing) {
  await Client.connect();
  const values = [
    newListing.title,
    newListing.author,
    newListing.isbn,
    newListing.condition,
    newListing.notes,
    newListing.cover_img,
    newListing.user_id,
  ];
  const postQuery =
    'INSERT INTO listings (title, author, isbn, condition, notes, cover_img, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
  const result = await Client.query(postQuery, values);
  console.table(result.rows);
  return result.rows;
}
