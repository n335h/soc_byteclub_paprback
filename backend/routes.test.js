//import supertest from 'supertest';
import Routes from "./routes.js";
import app from "./server.js";
import pool from "./server.js";

Routes(app, pool);
const request = require("supertest");
const express = require("express");

describe("GET /", () => {
  test("should respond with a working route", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200); // Check if the response status is 200 (OK)
    expect(response.body).toEqual({
      status: true,
      payload: "This route works!",
    });
  });
});

describe("GET /api/books/Dune", () => {
  test("Return json response", async () => {
    const response = await request(app).get("/api/books/Dune");

    expect(response.status).toBe(200); // Check if the response status is 200 (OK)
    expect(response.body).toEqual({
      success: true,
      payload: [
        {
          book_id: 14,
          title: "Dune",
          author: "Frank Herbert",
          isbn: "9780441172719",
          cover_img: "/books/dune.png",
        },
      ],
    });
  });
});

// describe("POST /api/listings", () => {
//   test("Return json response", async () => {
//     const response = await request(app).post("/api/listings").send({
//       user_id: 1,
//       title: "Test title",
//       author: "Test author",
//       isbn: "9780441172719",
//       cover_img: "/books/test_img.png",
//       condition: "Good",
//       notes: "Test notes",
//     });

//     expect(response.status).toBe(200); // Check if the response status is 200 (OK)
//     expect(response.body).toEqual({
//       success: true,
//       payload: [{
//         user_id: 1,
//         title: "Test title",
//         author: "Test author",
//         isbn: "9780441172719",
//         cover_img: "/books/test_img.png",
//         condition: "Good",
//         notes: "Test notes",
//       }],
//     });
//   });
// });
