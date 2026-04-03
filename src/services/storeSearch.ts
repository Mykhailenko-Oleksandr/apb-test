import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ResponseDecoderVin } from "./api";

type DraftStore = {
  searchStore: ResponseDecoderVin[];
  setNewStore: (newSearch: ResponseDecoderVin) => void;
};

export const useSearchStore = create<DraftStore>()(
  persist(
    (set) => ({
      searchStore: [],
      setNewStore: (newSearch) =>
        set((state) => {
          let updated = [newSearch, ...state.searchStore];
          if (updated.length > 2) {
            updated = updated.slice(0, 3);
          }
          return { searchStore: updated };
        }),
    }),
    {
      name: "searchStore",
      partialize: (state) => ({ searchStore: state.searchStore }),
    },
  ),
);
