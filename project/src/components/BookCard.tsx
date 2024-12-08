import React from 'react';
import { Book } from '../types';
import { Button } from './Button';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
  isSelected?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onSelect, isSelected }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{book.synopsis}</p>
        <Button
          variant={isSelected ? 'secondary' : 'primary'}
          onClick={() => onSelect(book)}
          fullWidth
        >
          {isSelected ? 'Selected' : 'Select Book'}
        </Button>
      </div>
    </div>
  );
};