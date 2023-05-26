const BASE_URL = 'http://localhost:4040';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json()).then(console.log)
}

fetchBooks();
fetchBookById(2);
fetchBookById(4);
// fetchBookById(10);
