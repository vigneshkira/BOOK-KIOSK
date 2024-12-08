import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book as BookIcon } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <BookIcon className="w-16 h-16 mx-auto text-blue-600" />
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to the Future of Reading
      </h1>
      <p className="text-xl text-gray-600">
        Experience our futuristic book vending machine. Browse, select, and borrow
        books with just a few taps.
      </p>
      <div className="flex justify-center gap-4">
        <Button onClick={() => navigate('/scan')} className="flex items-center gap-2">
          Start Scanning
          <BookIcon className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate('/books')}
          className="flex items-center gap-2"
        >
          Browse Books
        </Button>
      </div>
    </div>
  );
};