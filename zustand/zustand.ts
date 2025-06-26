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
  getTotalPrice: () => number;
  getTotalItems: () => number;
  updateQuantity: (id: string, quantity: number) => void;
};

export const useBagStore = create<BagStore>((set, get) => ({
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
  updateQuantity: (id, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          bags: state.bags.filter((bag) => bag.id !== id),
        };
      }
      return {
        bags: state.bags.map((bag) =>
          bag.id === id ? { ...bag, quantity } : bag
        ),
      };
    }),
  clearCart: () => set({ bags: [] }),
  getTotalPrice: () => {
    const { bags } = get();
    return bags.reduce((total, bag) => total + (bag.price * bag.quantity), 0);
  },
  getTotalItems: () => {
    const { bags } = get();
    return bags.reduce((total, bag) => total + bag.quantity, 0);
  },
}));