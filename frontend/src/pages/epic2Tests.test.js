import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import BrowseBooks from './BrowseBooks';
import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect'; // import this to use custom matchers like toBeInTheDocument



jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));


describe('BrowseBooks', () => {

  test('BrowseBooks component renders search bar and search button', () => {

    // Render the component
    render(
      <MemoryRouter>
      <BrowseBooks />
      </MemoryRouter>
    );
    
    // Get the search input 
    const searchInput = screen.getByPlaceholderText('Search');
    const searchButton = screen.getByText('Search');

    // assert that the listings are filtered correctly
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    
  });


  test('typing in searchbar input sets searchterm', () => {

    // Render the component
    render(
      <MemoryRouter>
      <BrowseBooks />
      </MemoryRouter>
    );

    // Get the search input
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: '1984' } });

    // Assert that the state has been updated correctly
    expect(searchInput.value).toBe('1984');
  });


  test('clicking search button filters listings', () => {

   
    const setState = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(initState => [initState, setState]);
      
  

    // Render the component
    render(
      <MemoryRouter>
      <BrowseBooks />
      </MemoryRouter>
    );

    // Get the search input
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: '1984' } });

    // Get the search button
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    // Assert that the listings are filtered correctly
    const listing1 = screen.getById('book-container');
    const listing2 = screen.queryByText('The Great Gatsby');
    expect(listing1).toBeInTheDocument();
    expect(listing2).not.toBeInTheDocument();
  });


})

