import fs from "node:fs/promises";
import pkg from 'pg';
const { Client } = pkg;

export async function getBooks() {
    await Client.connect();
    const query = "SELECT * FROM books;";
    const result = await Client.query(query);
    console.log(result.rows);
    return (result.rows);
}
