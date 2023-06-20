import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListYourBookInput from './ListYourBookInput';
import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import '@testing-library/jest-dom/extend-expect'; // import this to use custom matchers like toBeInTheDocument

describe('ListYourBookInput', () => {
  test('renders search button', () => {
    render(
      <MemoryRouter>
        <ListYourBookInput />
      </MemoryRouter>
    );

    const searchButton = screen.getByText('Search');
    expect(searchButton).toBeInTheDocument();
  });
});

describe('SearchBar on Load', () => {
  test('renders search input and is empty', () => {
    render(
      <MemoryRouter>
        <ListYourBookInput />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText('ISBN or title');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toBeEmptyDOMElement();
  });
});

describe('List your book search input', () => {
  test('you can write in seach bar', () => {
    render(
      <MemoryRouter>
        <ListYourBookInput />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText('ISBN or title');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toBeEmptyDOMElement();
    searchInput.value = 'test';
    expect(searchInput.value).toBe('test');
  });
});

