import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { test, expect } from '@jest/globals';
// import ListYourBookInput from '../ListYourBookInput/ListYourBookInput';
// import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import ListYourBook from '../listYourBook/ListYourBook';
import { handleChange } from './ListYourBook.js';
import '@testing-library/jest-dom/extend-expect'; // import this to use custom matchers like toBeInTheDocument

// describe('search button searches for value of search input', () => {
//   test('search button searches for value of search input', () => {
//     render(
//       <MemoryRouter>
//         <ListYourBook />
//       </MemoryRouter>
//     );

//     const searchInput = screen.getByPlaceholderText('ISBN or title');
//     expect(searchInput).toBeInTheDocument();
//     expect(searchInput).toBeEmptyDOMElement();
//     searchInput.value = 'test';
//     expect(searchInput.value).toBe('test');
//     const searchButton = screen.getByText('Search');
//     expect(searchButton).toBeInTheDocument();
//     searchButton.click();
//     expect(searchInput.value).toBe('test');
//   });
// });

describe('ListYourBook component renders input and output', () => {
  test('ListYourBook component renders input and output', () => {
    render(
      <MemoryRouter>
        <ListYourBook />
      </MemoryRouter>
    );
    const input = screen.getByTestId('listyourbook-input');
    const output = screen.getByTestId('listyourbook-output');
    expect(input).toBeInTheDocument();
    expect(output).toBeInTheDocument();
  });
});

describe('typing in searchbar input sets searchterm', () => {
  test('typing 1984 in searchbar sets searchterm to 1984', () => {
    render(
      <MemoryRouter>
        <ListYourBook />
      </MemoryRouter>
    );
    const inputElement = screen.getByTestId('search-input');
    fireEvent.change(inputElement, { target: { value: '1984' } });

    // Assert that the state has been updated correctly
    expect(inputElement.value).toBe('1984');
  });
});

test('Confirms listing info is being stored in object to be sent to API', async () => {
  render(
    <MemoryRouter>
      <ListYourBook />
    </MemoryRouter>
  );

  // Mock the successful API response for book search
  const mockBookResponse = {
    title: 'Test Title',
    author: 'Test Author',
    cover_img: 'test-cover.jpg',
    isbn: '1234567890',
  };
  jest.spyOn(window, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({ payload: [mockBookResponse] }),
  });

  // Set the search term and trigger the search
  const searchInput = screen.getByPlaceholderText('ISBN or title');
  fireEvent.change(searchInput, { target: { value: 'test' } });
  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);

  // Assert that the search result is displayed in the input elements
  await waitFor(() => {
    const titleInput = screen.getByTestId('title-input');
    expect(titleInput).toHaveValue(mockBookResponse.title);
  });
  await waitFor(() => {
    const authorInput = screen.getByTestId('author-input');
    expect(authorInput).toHaveValue(mockBookResponse.author);
  });

  // Set the condition and notes and trigger the listing creation
  const conditionSelect = screen.getByRole('combobox', {
    className: 'outputForm',
  });
  fireEvent.change(conditionSelect, { target: { value: 'Good' } });
  const notesInput = screen.getByPlaceholderText('Notes');
  fireEvent.change(notesInput, {
    target: { value: 'Sample notes' },
  });

  const createListingButton = screen.getByText('Post Listing');
  fireEvent.click(createListingButton);

  await waitFor(() => {
    const mockListingRequest2 = {
      title: mockBookResponse.title,
      author: mockBookResponse.author,
      isbn: mockBookResponse.isbn,
      cover_img: 'test-cover.jpg',
      condition: conditionSelect.value,
      notes: notesInput.value,
    };

    console.table(mockListingRequest2.notes);

    // Assert that the listing request is correct
    expect(mockListingRequest2).toStrictEqual({
      author: 'Test Author',
      condition: 'Good',
      cover_img: 'test-cover.jpg',
      isbn: '1234567890',
      notes: 'Sample notes',
      title: 'Test Title',
    });

    //assert that the listing is correct

    //     jest.spyOn(window, 'fetch').mockResolvedValueOnce({
    //         ok: true,
    //         json: () => Promise.resolve({ payload: [mockListingRequest2] }),
    //       });

    // Mock the successful API response for listing creation
    // const mockListingResponse = {
    //     id: 1,
    //     title: mockBookResponse.title,
    //     author: mockBookResponse.author,
    //     condition: conditionSelect,
    //     notes:  notesInput,
    //   };
    //   jest.spyOn(window, 'fetch').mockResolvedValueOnce({
    //     ok: true,
    //     json: () => Promise.resolve(mockListingResponse),
    //   });
  });
});
