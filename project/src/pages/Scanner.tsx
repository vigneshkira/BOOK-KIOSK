import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Timer } from 'lucide-react';
import { Button } from '../components/Button';

export const Scanner: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6 flex items-center justify-center gap-4">
          <Timer className="w-6 h-6 text-blue-600" />
          <span className="text-2xl font-semibold">{formatTime(timeLeft)}</span>
        </div>

        <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
          <Camera className="w-16 h-16 text-gray-400" />
        </div>

        <h2 className="text-xl font-semibold mb-4">Scan Your First Book</h2>
        <p className="text-gray-600 mb-6">
          Position the book's barcode in front of the scanner
        </p>

        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate('/books')}>
            Browse Books Instead
          </Button>
        </div>
      </div>
    </div>
  );
};