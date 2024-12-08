import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { LogOut } from 'lucide-react';
import { Button } from './Button';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, signOut } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated && (
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">Book Kiosk</h1>
            <Button
              variant="outline"
              onClick={signOut}
              className="flex items-center gap-2"
            >
              <LogOut size={18} />
              Sign Out
            </Button>
          </div>
        </header>
      )}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};