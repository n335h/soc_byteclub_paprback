import fs from "node:fs/promises";
import pkg from 'pg';
const { Client } = pkg;

export async function getBooks() {
    await Client.connect();
    const query = "SELECT * FROM books;";
    const result = await Client.query(query);
    console.table(result.rows);
    return (result.rows);
}

// post a new listing into the database
export async function postListing() {
    await Client.connect();
    const query = "INSERT INTO listings (title, author, isbn, condition, notes, cover_img, user_id) VALUES (, , , , , , );";
    const result = await Client.query(query);
    console.table(result.rows);
    return (result.rows);
}