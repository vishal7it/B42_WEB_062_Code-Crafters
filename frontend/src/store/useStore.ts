import { create } from 'zustand';
import type { User, Message } from '../types';

interface Store {
  users: User[];
  currentUser: User | null;
  messages: Message[];
  addUser: (user: User) => void;
  removeUser: (userId: string) => void;
  updateUser: (userId: string, updates: Partial<User>) => void;
  setCurrentUser: (user: User) => void;
  addMessage: (message: Message) => void;
}

export const useStore = create<Store>((set) => ({
  users: [],
  currentUser: null,
  messages: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (userId) => set((state) => ({ users: state.users.filter(u => u.id !== userId) })),
  updateUser: (userId, updates) => set((state) => ({
    users: state.users.map(u => u.id === userId ? { ...u, ...updates } : u)
  })),
  setCurrentUser: (user) => set({ currentUser: user }),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));