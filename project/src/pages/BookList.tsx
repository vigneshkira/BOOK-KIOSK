import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookCard } from '../components/BookCard';
import { Button } from '../components/Button';
import { books } from '../data/books';
import { useBookStore } from '../store/useBookStore';

export const BookList: React.FC = () => {
  const navigate = useNavigate();
  const { selectedBooks, addBook, removeBook } = useBookStore();

  const handleBookSelect = (book: typeof books[0]) => {
    const isSelected = selectedBooks.some((b) => b.id === book.id);
    if (isSelected) {
      removeBook(book.id);
    } else {
      addBook(book);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Available Books</h1>
        <div className="flex items-center gap-4">
          <p className="text-gray-600">
            Selected: {selectedBooks.length} {selectedBooks.length === 1 ? 'book' : 'books'}
          </p>
          {selectedBooks.length > 0 && (
            <Button onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onSelect={handleBookSelect}
            isSelected={selectedBooks.some((b) => b.id === book.id)}
          />
        ))}
      </div>
    </div>
  );
};