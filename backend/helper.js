import dotenv from 'dotenv';
// import { v4 as uuidv4 } from 'uuid';


dotenv.config();


// BOOKS

export async function getBooks(client) {
  const query = 'SELECT * FROM books;';
  const result = await client.query(query);
  console.table(result.rows);
  return result.rows;
}









// LISTINGS

// get all listings
export async function getListings(client) {
  try {
    const query = 'SELECT * FROM listings;';
    const result = await client.query(query);
    console.table(result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    return null;
  }
}



// post a new listing into the database
export async function postListing(client, newListing) {
  try {

    const values = [
      user_id,
      newListing.title,
      newListing.author,
      newListing.isbn,
      newListing.cover_img,
      newListing.condition,
      newListing.notes
    ];

    const postQuery = 'INSERT INTO listings (user_id, title, author, isbn, cover_img, condition, notes) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const result = await client.query(postQuery, values);
    console.table(result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    return null;
  }
}
 





// USERS




