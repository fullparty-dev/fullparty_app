import { create } from "zustand";
import type { Party } from "../types";

export type Mode = "casual" | "rank" | "other";

type PartyStore = {
  lastJoinedParty: Party | null;
  setLastJoinedParty: (party: Party) => void;
};

export const usePartyStore = create<PartyStore>((set) => ({
  lastJoinedParty: null,
  setLastJoinedParty: (party) => set({ lastJoinedParty: party }),
}));

type ModeStore = {
  selectedMode: Mode;
  setSelectedMode: (mode: Mode) => void;
};

export const useModeStore = create<ModeStore>((set) => ({
  selectedMode: "casual",
  setSelectedMode: (mode) => set({ selectedMode: mode }),
}));