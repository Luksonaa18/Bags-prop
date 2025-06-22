import { create } from "zustand";

type Bag = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type BagStore = {
  bags: Bag[];
  addBag: (bag: Omit<Bag, "quantity">) => void;
  removeBag: (id: string) => void;
  clearCart: () => void;
};

export const useBagStore = create<BagStore>((set) => ({
  bags: [],
  addBag: (newBag) =>
    set((state) => {
      const existing = state.bags.find((bag) => bag.id === newBag.id);
      if (existing) {
        return {
          bags: state.bags.map((bag) =>
            bag.id === newBag.id ? { ...bag, quantity: bag.quantity + 1 } : bag
          ),
        };
      } else {
        return {
          bags: [...state.bags, { ...newBag, quantity: 1 }],
        };
      }
    }),
  removeBag: (id) =>
    set((state) => ({
      bags: state.bags.filter((bag) => bag.id !== id),
    })),
  clearCart: () => set({ bags: [] }),
}));
