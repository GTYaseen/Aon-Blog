import { create } from 'zustand'

export const useStore = create((set) => ({
  favorite: [],
  setFavorite: (item) => set((state) => ({ favorite: [...state.favorite, item] })),
}))
