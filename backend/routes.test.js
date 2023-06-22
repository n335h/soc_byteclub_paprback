//import supertest from 'supertest';
//import app from "../backend/server.js";
//import {describe, expect, test} from '@jest/globals';

const request = require('supertest')
const express = require('express')
//const Routes = require('../backend/routes.js')
const app = express()
const pool = {};
function Routes(app, pool) {
  app.get("/", (req, res) => {
    res.json({
      status: true,
      payload: "This route works!",
    });
  });
}

Routes(app, pool);

describe('GET /', () => {
  test('should respond with a working route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200); // Check if the response status is 200 (OK)
    expect(response.body).toEqual({
      status: true,
      payload: "This route works!", 
    });
  });
});

describe('GET /api/books/:isbntitle', () => {
  test('Return json response', async () => {
    const mockResult = { rows: [{ isbn: '1234567890', title: 'Test Title' }] };
    pool.query = jest.fn().mockResolvedValue(mockResult);
    const response = await request(app).get('/api/books/:isbntitle');
    //console.log(response.body)
    expect(response.status).toBe(200); // Check if the response status is 200 (OK)
    expect(response.body).toEqual({
      success: true,
      payload: mockResult.rows,
    });
  });
});





















// describe('GET /', (req, res) => {
//     test('should respond with a working route', async () => {
//       const response = await app.get('/');
//       expect(response.status).toBe(200); // Check if the response status is 200 (OK)
//       expect(response.body).toEqual({
//         status: true,
//         payload: "This route works!",
//       });
//     });
//   });
  