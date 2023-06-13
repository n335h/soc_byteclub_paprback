import fs from "node:fs/promises";

export async function getBooks() {
    await client.connect();
    const query = "SELECT * FROM books;";
    const result = await client.query(query);
    console.log(result.rows);
    return (result.rows);
}
