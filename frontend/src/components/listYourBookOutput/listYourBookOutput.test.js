import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListYourBookOutput from './ListYourBookOutput';
import '@testing-library/jest-dom/extend-expect'; // import this to use custom matchers like toBeInTheDocument

describe('bookOutput', () => {
  test('renders coverdefault image on page load', () => {
    render(
      <MemoryRouter>
        <ListYourBookOutput book={{}} />
      </MemoryRouter>
    );

    const coverDefault = screen.getByAltText('book cover');
    const srcAttribute = coverDefault.getAttribute('src');
    expect(srcAttribute).toContain('coverDefault.png');
  });
});

describe('DisabledEntries', () => {
  test('Author and title input fields are disabled', () => {
    render(
      <MemoryRouter>
        <ListYourBookOutput book={{}} />
      </MemoryRouter>
    );

    const authorInput = screen.getByPlaceholderText('Author');
    const titleInput = screen.getByPlaceholderText('Title');
    expect(authorInput).toBeDisabled();
    expect(titleInput).toBeDisabled();
  });
});

describe('Condition and Notes fields empty', () => {
  test('Checking Condition and Notes fields empty', () => {
    render(
      <MemoryRouter>
        <ListYourBookOutput book={{}} />
      </MemoryRouter>
    );

    const conditionInput = screen.getByPlaceholderText('Condition');
    const notesInput = screen.getByPlaceholderText('Notes');
    expect(conditionInput).toHaveValue('Condition');
    expect(notesInput).toBeEmptyDOMElement();
  });
});

describe('PostListingButton', () => {
  test('Post Listing button is visible on screen', () => {
    render(
      <MemoryRouter>
        <ListYourBookOutput book={{}} />
      </MemoryRouter>
    );

    const postListingButton = screen.getByText('Post Listing');
    expect(postListingButton).toBeVisible();
  });
});

describe('OutputForm', () => {
    test('OutputForm displays correct book info', () => {
        render(
            <MemoryRouter>
              <ListYourBookOutput book={{
                title: 'Test Title',
                author: 'Test Author',
              }} />
            </MemoryRouter>
          );

          const titleInput = screen.getByTestId('title-input');
          const authorInput = screen.getByTestId('author-input');
        expect(titleInput).toHaveValue('Test Title');
        expect(authorInput).toHaveValue('Test Author');
    });
});



        

// test('renders coverdefault image on page load', () => {
//   // Render the ListYourBookOutput component
//   const { getByAltText } = render(<ListYourBookOutput book={{}} />);

//   // Find the cover image by alt text
//   const coverImage = getByAltText('book cover');

//   // Assert that the cover image source is equal to the coverdefault image source
//   expect(coverImage.src).toContain(
//     '../../assets/images/coverDefault.png'
//   );
// });
