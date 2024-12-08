import { create } from 'zustand';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  signIn: async (email: string, password: string) => {
    // Simulate API call
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email,
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  signOut: () => set({ user: null, isAuthenticated: false }),
}));