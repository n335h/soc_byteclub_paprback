import { render, screen } from "@testing-library/react";
import ListingsCarousel from "./ListingsCarousel";
import { MemoryRouter } from "react-router-dom";

 // Mock the successful API response for book search
 const mockListingResponse = [{
    user_id: 1,
    title: 'Test Title',
    author: 'Test Author',
    cover_img: 'test-cover.jpg',
    isbn: '1234567890',
    condition: 'Good',
    notes: 'Sample notes',
  }];

  jest.spyOn(window, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({ payload: mockListingResponse }),
  });

  render(
  <MemoryRouter>
  <ListingsCarousel />
  </MemoryRouter>);
  const listing = screen.getByTestId('listing');
    expect(listing.textContent).toEqual('Test Title');



