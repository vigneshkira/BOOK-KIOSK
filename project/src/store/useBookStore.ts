import { create } from 'zustand';
import type { Book } from '../types';

interface BookState {
  selectedBooks: Book[];
  addBook: (book: Book) => void;
  removeBook: (bookId: string) => void;
  clearBooks: () => void;
}

export const useBookStore = create<BookState>((set) => ({
  selectedBooks: [],
  addBook: (book) =>
    set((state) => ({ selectedBooks: [...state.selectedBooks, book] })),
  removeBook: (bookId) =>
    set((state) => ({
      selectedBooks: state.selectedBooks.filter((book) => book.id !== bookId),
    })),
  clearBooks: () => set({ selectedBooks: [] }),
}));