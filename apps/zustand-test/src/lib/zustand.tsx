import { create } from "zustand";

type BearState = {
  bears: number;
  increasePopulation: (by: number) => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

type CatState = {
  cats: number;
  increasePopulation: (by: number) => void;
  removeAllCats: () => void;
  updateCats: (newCats: number) => void;
};

export const useCatStore = create<CatState>()((set) => ({
  cats: 0,
  increasePopulation: () => set((state) => ({ cats: state.cats + 1 })),
  removeAllCats: () => set({ cats: 0 }),
  updateCats: (newCats) => set({ cats: newCats }),
}));
