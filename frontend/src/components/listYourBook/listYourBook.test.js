import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "@jest/globals";
// import ListYourBookInput from '../ListYourBookInput/ListYourBookInput';
// import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import ListYourBook from "../listYourBook/ListYourBook";
import { handleChange } from "./ListYourBook.js";
import "@testing-library/jest-dom/extend-expect"; // import this to use custom matchers like toBeInTheDocument

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

describe("ListYourBook component renders input and output", () => {
  test("ListYourBook component renders input and output", () => {
    render(
      <MemoryRouter>
        <ListYourBook />
      </MemoryRouter>
    );
    const input = screen.getByTestId("listyourbook-input");
    const output = screen.getByTestId("listyourbook-output");
    expect(input).toBeInTheDocument();
    expect(output).toBeInTheDocument();
  });
});

describe("typing in searchbar input sets searchterm", () => {
  test("typing 1984 in searchbar sets searchterm to 1984", () => {
    render(
      <MemoryRouter>
        <ListYourBook />
      </MemoryRouter>
    );
    const inputElement = screen.getByTestId("search-input");
    fireEvent.change(inputElement, { target: { value: "1984" } });

    // Assert that the state has been updated correctly
    expect(inputElement.value).toBe("1984");
  });
});

test("creates a listing", async () => {
  render(
    <MemoryRouter>
      <ListYourBook />
    </MemoryRouter>
  );

  // Simulate a book search
  const searchInput = screen.getByPlaceholderText("ISBN or title");
  fireEvent.change(searchInput, { target: { value: "1984" } });
  const searchButton = screen.getByText("Search");
  fireEvent.click(searchButton);

  // Set the condition and notes
  const conditionSelect = screen.getByTestId("condition");
  fireEvent.change(conditionSelect, { target: { value: "good" } });
  const notesInput = screen.getByTestId("notes");
  fireEvent.change(notesInput, { target: { value: "Sample notes" } });

  // Trigger the listing creation
  const createListingButton = screen.getByText("Post Listing");
  fireEvent.click(createListingButton);

  // Assert that the listing is created (you may need to modify this assertion based on your component)
  await waitFor(() => {
    const listingElement = screen.getByTestId("listing");
    expect(listingElement).toBeInTheDocument();
  });
});
