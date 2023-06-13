import ListYourBookInput from "../listYourBookInput/ListYourBookInput";
import ListYourBookOutput from "../listYourBookOutput/ListYourBookOutput";
import React, { useState } from "react";

function ListYourBook() {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      edition: "1st",
      ISBN: "9780743273565",
      synopsis:
        "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      edition: "1st",
      ISBN: "9780061120084",
      synopsis:
        "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors, and an event that occurred near her hometown when she was 10 years old.",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      edition: "1st",
      ISBN: "9780451524935",
      synopsis:
        "1984 is a dystopian novel by George Orwell published in 1949. The novel is set in Airstrip One, a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      edition: "1st",
      ISBN: "9780141439518",
      synopsis:
        "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      edition: "1st",
      ISBN: "9780316769488",
      synopsis:
        "The Catcher in the Rye is a novel by J.D. Salinger published in 1951. The novel details two days in the life of Holden Caulfield, a teenager who has been expelled from prep school. The story is known for its themes of alienation, rebellion, and the search for identity.",
    },
    {
      id: 6,
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      edition: "1st",
      ISBN: "9780156907392",
      synopsis:
        "To the Lighthouse is a novel by Virginia Woolf published in 1927. It is considered one of her most successful and autobiographical works. The novel is divided into three sections and explores the lives and relationships of the Ramsay family and their guests on the Isle of Skye in Scotland.",
    },
    {
      id: 7,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      edition: "1st",
      ISBN: "9780618640157",
      synopsis:
        "The Lord of the Rings is an epic fantasy novel written by J.R.R. Tolkien. The story began as a sequel to Tolkien's earlier, less complex children's fantasy novel The Hobbit (1937), but eventually developed into a much larger work. The Lord of the Rings tells the story of the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
    },
    {
      id: 8,
      title: "Moby-Dick",
      author: "Herman Melville",
      edition: "1st",
      ISBN: "9780142000083",
      synopsis:
        "Moby-Dick; or, The Whale is an epic novel by Herman Melville published in 1851. It tells the story of Ishmael, a sailor who joins the crew of the whaling ship Pequod, captained by the monomaniacal Captain Ahab, who is obsessed with hunting down the giant white whale named Moby Dick.",
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      edition: "1st",
      ISBN: "9780060850524",
      synopsis:
        "Brave New World is a dystopian novel by Aldous Huxley published in 1932. The novel is set in a futuristic World State, where citizens are genetically engineered, socially conditioned, and pharmaceutically pacified to maintain an ordered and stable society. The story follows the character Bernard Marx as he navigates the challenges and contradictions of this seemingly perfect world.",
    },
    {
      id: 10,
      title: "The Odyssey",
      author: "Homer",
      edition: "1st",
      ISBN: "9780140268867",
      synopsis:
        "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is considered one of the greatest works of literature and recounts the story of Odysseus, the king of Ithaca, and his long and treacherous journey home following the fall of Troy.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([{}]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }
  function handleSearchClick(e) {
    //if searchTerm === ISBN of any book in database return that book
    function checkBook(book) {
      if (book.ISBN.toLowerCase() === searchTerm.toLowerCase()) {
        return book;
      }
      if (book.title.toLowerCase() === searchTerm.toLowerCase()) {
        return book;
      }
    }
    let result = books.filter(checkBook);
    console.log(result);
    setSearchResult(result);
    console.log(searchResult);
  }

  return (
    <div>
      <h1>List Your Book</h1>
      <ListYourBookInput onChange={handleChange} onClick={handleSearchClick} />
      <ListYourBookOutput />
    </div>
  );
}

export default ListYourBook;
