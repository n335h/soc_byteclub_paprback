import React from 'react';
import { expect, test } from '@jest/globals';
import { MemoryRouter } from 'react-router-dom';
import ListYourBook from '../listYourBook/ListYourBook';
import ListingsCarousel from '../listingsCarousel/ListingsCarousel';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

describe('ListYourBook', () => {
  test('Searches for a book and creates a book object to be sent to listings', async () => {
    render(
      <MemoryRouter>
        <ListYourBook />
        <ListingsCarousel />
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
    // expect(notesInput).toHaveValue('Sample notes');

    const createListingButton = screen.getByText('Post Listing');
    fireEvent.click(createListingButton);

    await waitFor(() => {
      const mockListingRequest2 = {
        title: mockBookResponse.title,
        author: mockBookResponse.author,
        isbn: mockBookResponse.isbn,
        cover_img: 'test-cover.jpg',
        condition: 'Good',
        notes: 'Sample notes',
      };
      const fetchMock = jest.spyOn(window, 'fetch');
      expect(fetchMock).toHaveBeenCalledWith('/api/listings', {
        method: 'POST',
        body: JSON.stringify(mockListingRequest2),
        headers: {
          'Content-Type': 'application/json',
        },
      });

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
});
