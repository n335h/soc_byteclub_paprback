import dotenv from 'dotenv';
// import { v4 as uuidv4 } from 'uuid';


dotenv.config();


// BOOKS

export async function getBooks(pool) {
  const query = 'SELECT * FROM books;';
  const result = await pool.query(query);
  console.table(result.rows);
  return result.rows;
}   


// LISTINGS

// get all listings
export async function getListings(pool) {
  try {
    const query = 'SELECT * FROM listings WHERE user_id != 1;';
    const result = await pool.query(query);
    console.table(result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    return null;
  }
}



// post a new listing into the database
export async function postListing(pool, newListing) {
  try {

    const user_id = Math.floor(Math.random() * 3) + 1;

    const values = [
      newListing.title,
      newListing.author,
      newListing.isbn,
      newListing.cover_img,
      newListing.condition,
      newListing.notes,
      user_id
    ];

    const postQuery = 'INSERT INTO listings (title, author, isbn, cover_img, condition, notes, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const result = await pool.query(postQuery, values);
    console.table(result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    return null;
  }
}
 





// USERS




